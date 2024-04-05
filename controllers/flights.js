const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    const flight = await Flight.find({});
    res.render('flights/index', {title: 'Flights', flight});
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add a Flight'});
}

async function create(req, res) {
    try {
        Flight.create(req.body);
        res.redirect('/flights');
    } catch(error) {
        console.log('error: ', error);
        res.render({errorMessage: error.message});
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({flight: flight._id});
    res.render('flights/show', { title: 'Flight Detail', flight, ticket });
  }
