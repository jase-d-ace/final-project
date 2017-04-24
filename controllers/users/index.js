const controller = require('./controller')
const router = require('express').Router();
const path = require('path');
const passport = require('passport');
const AuthService = require('../../services/auth');
router.get('/', controller.find);
router.get('/logout', controller.logout)
router.post('/', passport.authenticate('local-signup'), controller.signup);
router.post('/login', passport.authenticate('local-login'), controller.login);
router.put('/:id', controller.update);
module.exports = router;
