const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destination');

// POST /fli
router.post('/flights/:id/destination', destinationController.create);

module.exports = router;
