const express = require('express')
const dotenv = require('dotenv');
const { createChat, findUserChats, findChat } = require('../controllers/chatController')

const router = express.Router()

dotenv.config();

const apiNorm = process.env.API_NORM
const apiUseId = process.env.API_USEID
const apiUseFindIdId = process.env.API_USEFINDIDID



router.post(apiNorm, createChat)
router.get(apiUseId, findUserChats)
router.get(apiUseFindIdId, findChat)



module.exports = router