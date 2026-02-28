const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nic: { type: String, required: true, unique: true }, // Ensure NIC is unique
  country: { type: String }, // Optional
  address: { type: String }, // Optional
  gmail: { type: String, required: true },
  phoneNumber: { type: String, required: true }, // Match frontend
  durationTime: { type: String }, // Optional
  date: { type: Date, required: true },
  start: { type: String }, // Optional
  end: { type: String }, // Optional
  passengerNumber: { type: Number }, // Match frontend, optional
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;