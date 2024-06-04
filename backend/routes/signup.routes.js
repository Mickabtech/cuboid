const express = require('express')
const router = express.Router()

const {signup, getUser, getUsers, updateUser} = require('../controllers/signup.controller.js')


router.post('/', signup),
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)


module.exports = router