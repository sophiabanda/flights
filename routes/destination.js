const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destination');

router.post('/flights/:id/destination', destinationController.create);

module.exports = router;
