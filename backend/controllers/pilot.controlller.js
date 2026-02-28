const Pilot = require("../models/pilot");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Pilot.find();
    if (!users.length)
      return res.status(404).json({ message: "No users found" });
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Server error while fetching users",
        error: err.message,
      });
  }
};

// Add a timetable entry
const addTimetableEntry = async (req, res) => {
  const { pid } = req.params;
  const { date, task } = req.body;
  try {
    const user = await Pilot.findOne({ _id: pid });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.timetable.push({ date, task });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Error adding timetable entry", error: err.message });
  }
};

// Get timetable for a pilot
const getTimetable = async (req, res) => {
  const { pid } = req.params;
  try {
    const user = await Pilot.findOne({ _id: pid });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user.timetable);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching timetable", error: err.message });
  }
};

// Get user by PID
const getById = async (req, res) => {
  try {
    const user = await Pilot.findOne({ pid: req.params.pid });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Server error while fetching user",
        error: err.message,
      });
  }
};

// Delete a timetable entry
const deleteTimetableEntry = async (req, res) => {
  const { pid, entryId } = req.params;
  try {
    const user = await Pilot.findOne({ _id: pid });
    if (!user) return res.status(404).json({ message: "User not found" });
    const entryIndex = user.timetable.findIndex(
      (entry) => entry._id.toString() === entryId
    );
    if (entryIndex === -1) {
      return res.status(404).json({ message: "Entry not found" });
    }
    user.timetable.splice(entryIndex, 1);
    user.timetable = user.timetable.filter(
      (entry) => entry._id.toString() !== entryId
    );
    await user.timetable.id(entryId).remove();
    await user.save();
    res
      .status(200)
      .json({ message: "Timetable entry deleted", timetable: user.timetable });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting timetable entry", error: err.message });
  }
};

// Calculate pilot salary based on category
const calculateSalary = async (req, res) => {
  const { pid } = req.params;
  try {
    const user = await Pilot.findOne({ pid });
    if (!user) return res.status(404).json({ message: "User not found" });

    const { experienceYears, flightHours, category } = user;
    const hourlyRate = category === "Senior Pilot" ? 200 : 100; // $200 for Senior, $100 for Junior
    const baseSalary = flightHours * hourlyRate;
    const bonus = category === "Senior Pilot" ? 5000 : 0; // $5000 bonus for Senior only
    const totalSalary = baseSalary + bonus;

    res.status(200).json({
      pid: user.pid,
      pname: user.pname,
      experienceYears,
      flightHours,
      category,
      hourlyRate,
      baseSalary,
      bonus,
      totalSalary,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error calculating salary", error: err.message });
  }
};

// Update user by PID
const updateUser = async (req, res) => {
  const { pname, password, experienceYears, flightHours } = req.body;
  try {
    // Determine category based on experienceYears
    const category = (experienceYears > 3) ? "Senior Pilot" : "Junior Pilot";
    const user = await Pilot.findOneAndUpdate(
      { pid: req.params.pid },
      { pname, password, experienceYears, flightHours, category },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error while updating user", error: err.message });
  }
};

module.exports = {
  addTimetableEntry,
  getTimetable,
  deleteTimetableEntry,
  calculateSalary,
  getById,
  getAllUsers,
  updateUser,
};
