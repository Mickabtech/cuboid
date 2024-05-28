const Usermod = require('../models/userModel.js');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

  
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({
        message: "Please fill in the name, email, and password"
      });
    }

   
    const existingUser = await Usermod.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    
    const newUser = await Usermod.create({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Usermod.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signup,
  getUsers,
};