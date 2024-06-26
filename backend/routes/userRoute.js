const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const { registerUser, loginUser, findUser, getUsers } = require('../controllers/userController')



const router = express.Router();

const apiReg = process.env.API_REG
const apiLog = process.env.API_LOG
const apiFindId = process.env.API_FIND_ID
const apiNorm = process.env.API_NORM

router.post(apiReg, registerUser)
router.post(apiLog, loginUser)
router.get(apiFindId, findUser)
router.get(apiNorm, getUsers)

module.exports = router