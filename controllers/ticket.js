const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req, res) {
    console.log('id--->',req.params.id)
    const flight = await Flight.findById(req.params.id);
    res.render('ticket/new', {title: 'Purchase Ticket', flight});
    // console.log('flight -->',flight, 'number-->', flight.flightNumber);
}

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        const ticket = await Ticket.find({flight: flight._id}).populate('flight');
        res.redirect(`/flights/${flight._id}`, flight, ticket)
    } catch(error) {
        console.log('error: ', error);
        res.render('error', { error: error})
    }
}




