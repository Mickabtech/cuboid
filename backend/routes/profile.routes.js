const express = require('express')
const router = express.Router()

const { profile, getProfile } = require('../controllers/profile.controller.js')
const upload = require('../middleware/profile.multer.js');
const { updateUser } = require('../controllers/signup.controller.js');


router.post('/', upload.single('picture'), profile)
router.get('/', getProfile)
router.put('/:id', updateUser)


module.exports = router