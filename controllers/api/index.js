const router = require('express').Router();
const controller = require('./controller');

router.get('/monsters', controller.index);
router.get('/monsters/:id', controller.show);
router.post('/monsters', controller.create);
router.delete('/monsters/:id', controller.destroy);

module.exports = router;
