const carts = require('../models/cartModel')

exports.addCartController = async (req, res) => {
    console.log("addCartController");

    const { userId, plantId, plantname, price, quantity } = req.body
    console.log(req.body);


    const image = req.file.filename
    console.log(image);

    try {
        const newCart = new carts({ userId, plantId, plantname, price, quantity, image })
        await newCart.save()
        console.log(newCart);
        res.status(200).json(newCart)

    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.allCartController = async (req, res) => {
    console.log("inside allCartController");
    const userId = req.userId


    try {
        const allCart = await carts.find({ userId })
        res.status(200).json(allCart)
    }
    catch (err) {
        res.status(401).json(err)
    }

}

exports.deleteCartController = async (req, res) => {
    console.log("inside deleteCartController");

    const { plantId } = req.params

    try {
        const removeCart = await carts.findOneAndDelete({ plantId })
        res.status(200).json(removeCart)
    }
    catch (err) {
        res.status(401).json(err)
    }

}

exports.editCartController = async (req, res) => {
    console.log("inside editCartController");

    const { plantId } = req.params

    const { quantity } = req.body

    try {
        const updateCart = await carts.findByIdAndUpdate({ plantId }, { quantity }, { new: true })
        res.status(200).json(updateCart)
    }
    catch (err) {
        res.status(401).json(err)
    }

}