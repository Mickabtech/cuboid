const express = require('express')
const router = express.Router()

const {signup, getUsers} = require('../controllers/signup.controller.js')


router.post('/', signup),
router.get('/', getUsers)


module.exports = router