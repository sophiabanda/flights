const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket');

//GET Starts with /
router.get('/flights/:id/ticket/new', ticketController.new);
// POST 
router.post('/flights/:id/ticket', ticketController.create);


module.exports = router;