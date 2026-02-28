const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user
    await user.save();

    // Send success response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Send success response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Error during login", error: error.message });
  }
};

const getAllUsers = async (req, res, next) => {
  let Users;

  try {
    Users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!Users) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ Users });
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let Users;

  try {
    Users = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!Users) {
    return res.status(404).json({ message: "Unable to Delete User Details" });
  }

  return res.status(200).json({ Users });
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  let Users;

  try {
    Users = await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
      password: password,
    });
    Users = await Users.save();
  } catch (err) {
    console.log(err);
  }
  if (!Users) {
    return res.status(404).json({ message: "Unable to Update User Details" });
  }

  return res.status(200).json({ Users });
};

const getId = async (req, res, next) =>{

    const id = req.params.id;

    let Users;

    try{
       Users = await User.findById(id); 

    }catch (err) {
        console.log(err);
    }
    if(!Users){
        return res.status(404).json({message:"User not found"});
    }

    return res.status(200).json({ Users });

}


module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  updateUser,
    getId
};
