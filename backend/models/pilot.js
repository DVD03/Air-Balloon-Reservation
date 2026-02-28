const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  task: { type: String, required: true },
});

const pilotSchema = new mongoose.Schema({
  pid: { type: String, required: true, unique: true },
  pname: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Captain", "First Officer"
  experienceYears: { type: Number, required: true },
  flightHours: { type: Number, required: true },
  password: { type: String, required: true },
  timetable: [timetableSchema], // Embedded timetable entries
});

module.exports = mongoose.model("Pilot", pilotSchema);
