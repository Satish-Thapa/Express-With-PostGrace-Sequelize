const express = require('express');
const router = express.Router();
const TestController = require('../controllers/controller');

router.post('/', TestController.addTest);
router.get('/', TestController.findTests);
router.get('/:id', TestController.findTestById);
router.put('/:id', TestController.updateTest);
router.delete('/:id', TestController.deleteById);

module.exports = router;