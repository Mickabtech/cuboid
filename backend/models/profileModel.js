const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

  phonenumber: String,
  bio: String,
  picture: String,
})

const ProfileModel = mongoose.model('profile', ProfileSchema);
module.exports = ProfileModel;