const person = require('../../models/user');
const router = require('express').Router();
const path = require('path');
const passport = require('passport');
const AuthService = require('../../services/auth');
router.post('/', passport.authenticate('local-signup', {
    session: false
}), (req, res) =>{
  res.redirect('/home')
});
router.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/home');
});
router.post('/login', passport.authenticate('local-login', {
    session: false
}), (req, res)=>{
  res.redirect('/home')
});
module.exports = router;
