const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  firstname: String,
  lastname: String,
  email: String,
  password: String,
  phonenumber: String,
  summary: String,
  bio: String,
  picture: String,

})

const UserModel = mongoose.model('cuboid user', UserSchema);
module.exports = UserModel;