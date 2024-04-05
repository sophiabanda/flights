const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

 async function newTicket(req, res) {
    const flight = Flight.findById(req.params.id);
    console.log(flight);
    res.render('ticket/new', {title: 'Purchase Ticket'}, flight);
}

async function create(req, res) {
    try {
        const ticket = Ticket.find({flight: flight._id}).populate('flight');
        res.redirect(`/flights/${flight._id}`)
    } catch(error) {
        console.log('error: ', error);
        res.render('error', { error: error})
    }
}




