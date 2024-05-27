const express = require('express')
const router = express.Router()


const {signin} = require('../controllers/login.controller.js')

router.post('/', signin)

module.exports = router