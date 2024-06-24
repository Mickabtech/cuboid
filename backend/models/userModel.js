const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 24
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 24
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 24
  },
  email: {
    type:String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true
  },
  password: {
    type:String,
    required: true,
    minlength: 3,
    maxlength: 1024,
    unique: true
  }
}, 
{
  timestamps: true
});

const UserModel = mongoose.model("User Cuboid", UserSchema)
module.exports = UserModel;