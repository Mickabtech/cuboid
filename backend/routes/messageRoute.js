const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { createMessage, getMessages } = require('../controllers/messageController')

const router = express.Router()

const apiNorm = process.env.API_NORM
const apiChatId = process.env.API_CHAT_ID

router.post(apiNorm, createMessage)
router.get(apiChatId, getMessages)




module.exports = router