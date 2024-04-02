const Flight = require('../models/flight');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const flight = await Flight.find({});
    res.render('flights/index', {title: 'Flights', flight})
}

function create(req, res) {

}