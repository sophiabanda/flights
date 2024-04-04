const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
}

function newTicket(req, res) {
    res.render('ticket/new', {title: 'Purchase Ticket'});
}

