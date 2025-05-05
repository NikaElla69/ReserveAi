const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  date: { type: Date, required: true },
  guests: { type: Number, required: true },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Reservation', ReservationSchema);