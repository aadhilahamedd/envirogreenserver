const express=require('express')
const route=express.Router()
const multerMiddleWare=require('../middleware/multerMiddleware')
const userController=require('../controller/userController')
const plantController=require('../controller/plantController')
const cartController=require('../controller/cartController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const paymentController = require('../controller/paymentController')

route.post('/register',userController.registerController)
route.post('/login',userController.loginUserController)
route.post('/add-plant',multerMiddleWare.single('image'),plantController.addPlantController)
route.get('/all-plant',plantController.allPlantController)
route.delete('/remove-plant/:plantname',plantController.deletePlantController)
route.put('/edit-plant/:plantname',plantController.editPlantControler)
route.post('/add-cart',jwtMiddleware,multerMiddleWare.single('image'),cartController.addCartController)
route.get('/all-cart',jwtMiddleware, cartController.allCartController)
route.delete('/remove-cart/:plantId',cartController.deleteCartController,)
route.put('/edit-cart/:plantId',cartController.editCartController)

// Stripe payment
route.post('/create-payment-intent', paymentController.createPaymentIntent)


module.exports=route
