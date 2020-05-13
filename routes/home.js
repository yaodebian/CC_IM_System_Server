// controllers
const homeController = require('../controllers/home')

const express = require('express')
const router = express.Router()

router.get('/', homeController.home)
router.get('/home', homeController.home)
router.get('/user', homeController.user)
router.get('/login', homeController.login)
router.get('/500', homeController.serverError)

module.exports = router
