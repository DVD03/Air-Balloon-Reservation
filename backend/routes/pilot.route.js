const express = require("express");
const router = express.Router();
const { addTimetableEntry, getTimetable, deleteTimetableEntry, calculateSalary, getById, getAllUsers, updateUser } = require("../controllers/pilot.controlller");

router.post("/:pid/timetable", addTimetableEntry);
router.get("/:pid/timetable", getTimetable);
router.delete("/:pid/timetable/:entryId", deleteTimetableEntry);
router.get("/:pid/salary", calculateSalary);
router.get("/:pid", getById);
router.get("/", getAllUsers);
router.put("/:pid", updateUser);



module.exports = router;