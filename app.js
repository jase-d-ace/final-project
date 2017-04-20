//dependencies
const express = require('express'),
      cors = require('cors')
      app = express(),
      morgan = require('morgan')
      PORT = process.env.PORT || 8080;
//hook up express
app.use(express.static('build'));
//hook up cors
app.use(cors());
//hook up morgan
app.use(morgan('dev'));
//hook up router
app.use(require('./router'));
//check for life
app.listen(PORT, ()=>{
  console.log(`ALIVE ON PORT ${PORT}`)
})
