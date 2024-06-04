const express = require('express')
const router = express.Router()
const upload = require('../middleware/profile.multer.js')


const {signin} = require('../controllers/login.controller.js')
const { getUser, updateUser} = require('../controllers/signup.controller.js')



router.get('/:id', getUser)
router.put('/:id', upload.single('picture'), updateUser);

router.post('/', signin)

module.exports = router