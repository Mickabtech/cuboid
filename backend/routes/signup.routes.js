const express = require('express')
const router = express.Router()
const upload = require('../middleware/profile.multer.js')

const {signup, getUser, getUsers, updateUser} = require('../controllers/signup.controller.js')


router.post('/', signup),
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', upload.single('picture'), updateUser);


module.exports = router