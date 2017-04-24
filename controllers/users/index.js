const person = require('../../models/user');
const router = require('express').Router();
const path = require('path');
const passport = require('passport');
const AuthService = require('../../services/auth');
router.get('/', (req, res) =>{
  person.findByUsername(req.user.username).then((data) =>{
    res.json(data)
  }).catch((error) =>{
    console.log('USER API ERROR:', error)
  })
});
router.post('/', passport.authenticate('local-signup'), (req, res) =>{
  console.log(req.user)
  res.redirect('/home')
});
router.post('/login', passport.authenticate('local-login'), (req, res)=>{
  console.log(req.user)
  res.redirect('/home')
});
module.exports = router;
