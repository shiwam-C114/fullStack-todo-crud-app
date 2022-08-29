const { Router } = require('express');
const User = require('../models/User');

const userRouter = Router()
userRouter.post("/register", async (req, res) => {
    try {
        const user = User(req.body)
        user.save()
        res.status(200).send("user created")

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: true, msg: "Internal server error" })
    }
})

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const result = await User.find({ email: email })
        res.send(`user may login ${result} `)

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: true, msg: "Internal server error" })
    }
})



module.exports = userRouter