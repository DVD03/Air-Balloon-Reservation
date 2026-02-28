const Booking = require("../models/BookingModel");

// Bookings air balloon
const createBooking = async (req, res) => {
  const {
    name,
    nic,
    country,
    address,
    gmail,
    phoneNumber,
    durationTime,
    date,
    start,
    end,
    passengerNumber,
  } = req.body;
  try {
    const user = new Booking({
      name,
      nic,
      country,
      address,
      gmail,
      phoneNumber,
      durationTime,
      date,
      start,
      end,
      passengerNumber,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error("Error saving user:", err);
    res
      .status(500)
      .json({ message: "Server error while adding user", error: err.message });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const users = await Booking.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error while fetching users" });
  }
};

// Get user by NIC
const getById = async (req, res) => {
  const nic = req.params.nic;
  try {
    const user = await Booking.findOne({ nic });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Server error while fetching user' });
  }
};

// Update booking by NIC
const updateBooking = async (req, res) => {
  const nic = req.params.nic;
  const { name, country, address, gmail, phoneNumber, durationTime, date, start, end, passengerNumber } = req.body;
  try {
    const user = await Booking.findOneAndUpdate(
      { nic },
      { name, country, address, gmail, phoneNumber, durationTime, date, start, end, passengerNumber },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Server error while updating user' });
  }
};

// Delete user by NIC
const deleteBooking = async (req, res) => {
  const nic = req.params.nic;
  try {
    const user = await Booking.findOneAndDelete({ nic });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User successfully deleted', user });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Server error while deleting user' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  updateBooking,
  getById,
  deleteBooking,
};
