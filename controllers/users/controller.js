const trainer = require('../../models/user');
const controller = {}

controller.find = (req, res) =>{
  trainer.findByUsername(req.user.username).then((data) =>{
    res.json(data)
  }).catch((error) =>{
    console.log('USER API ERROR:', error)
  })
}

controller.logout = (req, res) =>{
  console.log('successfully signed out')
  req.logout();
  req.session.destroy();
  res.clearCookie('connect-sid');
  res.redirect('/')
}

controller.signup = (req, res) =>{
  console.log(req.user)
  res.redirect('/home')
}

controller.update = (req, res) =>{
  trainer.update(req.body.pokeballs, req.body.greatballs, req.body.ultraballs, req.body.cash, req.user.id).then((data) =>{
    res.json(data)
  }).catch((error)=>{
    console.log('USER UPDATE ERROR:', error)
  })
}

controller.login = (req, res)=>{
  console.log(req.user)
  res.redirect('/home')
}

module.exports = controller;
