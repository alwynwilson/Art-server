const express = require('express')
const userController = require('../controller/userController')
const itemController = require('../controller/itemController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router = new express.Router()

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

// add art
router.post('/art/add',jwtMiddleware,itemController.addItemController)

//home items
router.get('/get-items',itemController.getHomeItems)

//remove items
router.delete('/item/:pid/remove',jwtMiddleware,itemController.removeItemController)

module.exports = router