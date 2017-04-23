const router = require('express').Router();
const cookieParse = require('./models/middleware_functions')
const path = require('path');

router.use('/api', require('./controllers/api'))
router.use('/users', cookieParse, require('./controllers/users'))

router.get(/\/*/, (req, res) =>{
  res.sendFile(path.join(__dirname + '/index.html'))
})
module.exports = router;
