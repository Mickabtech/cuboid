const Profmod = require('../models/profileModel')


const profile = async (req, res) => {
  try {
    const { phonenumber, bio} = req.body;
    const picture = req.file ? req.file.path : null;
  
    if (!phonenumber || !bio || !picture ) {
      return res.status(400).json({
        message: "Please fill in all fields"
      });
    }

    
    const newProfile = await Profmod.create({
      phonenumber,
      bio,
      picture,
    });

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const getProfile = async (req, res) => {
  try {
    const users = await Profmod.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
 profile,
 getProfile
};
