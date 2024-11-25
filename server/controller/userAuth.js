const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

// <----------------------------SIGNUP LOGIC--------------------------------->

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const userCreated = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("Internal Server Error");
    next(error)
  }
};


//<--------------------------------------------LOGIN LOGIC--------------------------------------->

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const userExist = await User.findOne({ email });
      if (!userExist) {
        return res.status(400).json({ message: "Invalid Email or Password" });
      }
  
      // Verify the password
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid Email or Password" });
      }
      // Generate token and send success response
      const token = await userExist.generateToken();
      return res.status(200).json({
        message: "Login Successful",
        token,
        userId: userExist._id.toString(),
      });
    } catch (error) {
      console.error("Error during login:", error); // Log error for debugging
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };


  //Get user Data

  const user = async (req, res) => {
    try {
      const userData = await User.findById(req.userId).populate('eventsCreated');
      console.log(userData);
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(`error in trying to get user data ${error}`);
    }
  };
  

module.exports = { signup , login, user};
