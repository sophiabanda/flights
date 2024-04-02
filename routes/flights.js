const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

// GET /flights - All Available
router.get('/', flightsController.index);
// GET /flights/new
router.get('/new', flightsController.new);
// POST /flights
router.post('/', flightsController.create);
// GET /flights/:id
router.get('/:id', flightsController.show);

module.exports = router;
