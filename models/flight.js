const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['SFO', 'OAK', 'LAX', 'JFK', 'SAN'],
    },
    arrival: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    }
});

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'Delta'],
        required: true
    },
    airport: {
        type: String,
        enum: ['SFO', 'OAK', 'LAX', 'JFK', 'SAN'],
        default: 'SFO',
        required: true
    },
    flightNumber: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    },
    destination: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightsSchema);
