const express = require('express')
const router = express.Router()

const { profile } = require('../controllers/profile.controller.js')
const upload = require('../middleware/profile.multer.js');


router.post('/', upload.single('picture'), profile)


module.exports = router