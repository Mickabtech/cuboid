const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const createToken = (_id) =>{
const jwtkey = process.env.JWTSECRETKEY
return jwt.sign({_id}, jwtkey, {expiresIn: "3d"});
}



const registerUser = async (req, res) =>{

  try {

    const {firstname, lastname, email, password } = req.body

    let user = await UserModel.findOne({email});

    if(user) return res.status(400).json("User exists....")
    
    if(!firstname || !lastname || !email || !password) 
      return res.status(400).json("All fields are required")

      if(!validator.isEmail(email)) 
        return res.status(400).json("Email must be a valid email")

      if(!validator.isStrongPassword(password)) 
        return res.status(400).json("Password must a srong password....")

      user = new UserModel({
        firstname,
        lastname,
        email, 
        password
      })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(user.password, salt)

      await user.save();

      const token = createToken(user._id)

      res.status(200).json({
        _id: user._id,
        firstname,
        lastname,
        email,
        token
      })


  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }

}


const loginUser = async (req, res) =>{

const {email, password} = req.body

try {

  let user = await UserModel.findOne({email});

  if(!user) return res.status(400).json("Invalid Email...")
  
    const isValidPassword = await bcrypt.compare(password, user.password)
     if(!isValidPassword) return res.status(400).json("Invalid password...")

      const token = createToken(user._id)

      res.status(200).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email,
        token
      })



} catch (error) {
  console.log(error)
  res.status(500).json(error)
}



}


const findUser = async (req, res) =>{
      const userId = req.params.userId;

      try {
        const user = await UserModel.findById(userId)
        res.status(200).json(user)
        
      } catch (error) {
        console.log(error)
        res.status(500).json(error)
      }
}

const getUsers = async (req, res) =>{

  try {
    const users = await UserModel.find()
    res.status(200).json(users)
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}



module.exports = {
  registerUser,
  loginUser,
  findUser,
  getUsers,
}