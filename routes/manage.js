// controllers
const manageController = require('../controllers/manage')

const express = require('express')
const router = express.Router()

router.get('/', manageController.home)

module.exports = router
