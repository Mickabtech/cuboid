const express = require('express')
const router = express.Router()

const { profile, getProfile } = require('../controllers/profile.controller.js')
const upload = require('../middleware/profile.multer.js');


router.post('/', upload.single('picture'), profile)
router.get('/', getProfile)


module.exports = router