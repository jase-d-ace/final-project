//dependencies
const express = require('express'),
      cors = require('cors'),
      app = express(),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      morgan = require('morgan'),
      bcrypt = require('bcrypt'),
      session = require('express-session'),
      passport = require('passport'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      PORT = process.env.PORT || 8080;

//hook up express
app.use(express.static('build'));

//hook up cors
app.use(cors());

//hook up morgan
app.use(morgan('dev'));

//hook up passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//hook up bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//hook up cookieParser
app.use(cookieParser());

//(de)serialize users
const person = require('./models/user');
const localStrat = require('passport-local').Strategy;
passport.serializeUser((userObj, done) =>{
  person.findByUsername(userObj.username).then((user)=>{
    done(null, user);
  }).catch((error) =>{
    console.log('Passport Deserialize Error: ', error);
    return done(null, false);
  });
});
passport.deserializeUser((user, done)=>{
  done(null, user)
})

//Passport Strats
//signup strat
passport.use('local-signup', new localStrat({
    usernameField: 'user[username]'
    , passwordField: 'user[password]'
    , passReqToCallback: true
}, (req, username, password, done) => {
    person.create(req.body.user).then((user) => {
        return done(null, user);
    }).catch((error) => {
        console.log('User Creation Error: ', error);
        return done(null, false);
    });
}));

//login strat
passport.use('local-login', new localStrat({
    usernameField: 'user[username]'
    , passwordField: 'user[password]'
    , passReqToCallback: true
}, (req, username, password, done) => {
    person.findByUsername(username).then((user) => {
        if (user) {
            const isAuthed = bcrypt.compareSync(password, user.password_digest);
            if (isAuthed) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }
        else {
            return done(null, false);
        }
    }).catch((error) => {
        console.log('User Login Error: ', error);
    });
}));

//hook up router
app.use(require('./router'));

//hook up socket server
io.on('connection', (socket)=>{
  console.log('a user has connected');

  socket.on('disconnect', ()=>{
    console.log('a user has disconnected');
  });

  socket.on('room', (data)=>{
    console.log('joined room: ', data.room)
    socket.join(data.room)
  })

  socket.on('leave room', (data) =>{
    socket.leave(data.room)
  })

  socket.on('speaking event', (data)=>{
    console.log('message:', data.message)
    console.log('speaking event data', data)
    socket.emit('receive message', data)
  })

}); //end of socket generate

//check for life
http.listen(PORT, ()=>{
  console.log(`ALIVE ON PORT ${PORT}`)
})
