const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('ticket/new', {title: 'Purchase Ticket', flight});
}

async function create(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      const ticket = new Ticket(req.body);
      ticket.flight = flight._id; // Set to the _id of the flight
      await ticket.save();
      res.redirect(`/flights/${flight._id}`);
    } catch (error) {
        console.log('error: ', error);
        res.render({errorMessage: error.message})
    }
  }





