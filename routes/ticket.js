const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket');

//GET Starts with /
router.get('/ticket/new', ticketController.new);


module.exports = router;