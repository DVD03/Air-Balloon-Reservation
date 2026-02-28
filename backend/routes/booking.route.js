const { Router } = require("express");
const {
  createBooking,
  getAllBookings,
  updateBooking,
  getById,
  deleteBooking,
} = require("../controllers/booking.controller");
const BookingRouter = Router();

BookingRouter.get("/", getAllBookings);
BookingRouter.post("/", createBooking);
BookingRouter.put("/:nic", updateBooking);
BookingRouter.get("/:nic", getById);
BookingRouter.delete("/:nic", deleteBooking);  
module.exports = BookingRouter;
