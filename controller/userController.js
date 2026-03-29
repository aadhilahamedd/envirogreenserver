const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerController = async (req, res) => {
    console.log("registerController");

    const { name, email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("user already exist")
        }
        else {
            const newUser = new users({ name, email, password })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }

}

exports.loginUserController = async (req, res) => {
    console.log("inside addUserController");

    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            const user = await users.findOne({ email, password })
            if (user) {
                const token = jwt.sign({ userid: existingUser._id }, process.env.JWTPASSWORD)

                res.status(200).json({ user: existingUser, token })
            }
            else {
                res.status(406).json("invalid user")
            }
        }
        else {
            res.status(404).json("no user found")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }

}