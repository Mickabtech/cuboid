const Usermod = require('../models/userModel.js');
const bcrypt = require('bcrypt');

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usermod.findOne({ email: email });
    
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        res.json("Successful");
      } else {
        res.status(401).json("Password Incorrect");
      }
    } else {
      res.status(404).json('User does not exist');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signin
};
