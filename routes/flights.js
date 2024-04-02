const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

// GET /flights - All Available
router.get('/', flightsController.index);
// GET /flights/add
router.get('/add', flightsController.new);

module.exports = router;
