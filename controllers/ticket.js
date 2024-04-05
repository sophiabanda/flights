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
        const ticket = await Ticket.find({flight: flight._id}).populate('flight');
        
        console.log('ticket__>', ticket)
        res.redirect(`/flights/${flight._id}`);
    } catch(error) {
        console.log('error: ', error);
        res.render('error', { error: error})
    }
}




