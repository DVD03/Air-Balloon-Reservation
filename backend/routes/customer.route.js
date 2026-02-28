const express = require("express");
const CustomerRouter = express.Router();
const { loginUser, registerUser, getAllUsers, deleteUser, updateUser, getId } = require("../controllers/customer.controller");

CustomerRouter.post("/register", registerUser);
CustomerRouter.post("/login", loginUser);

//users 
CustomerRouter.get("/",getAllUsers);
CustomerRouter.delete("/:id", deleteUser);
CustomerRouter.put("/:id", updateUser);
CustomerRouter.get("/:id", getId);


module.exports = CustomerRouter;
