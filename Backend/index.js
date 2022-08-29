require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

dbConnect()

app.get("/", (req, res) => {
    console.log("working");
    res.send("working")
})

app.post("/register", async (req, res) => {

    console.log(req.body);
    console.log("connected");
    const user = User(req.body)
    user.save()
    res.send("user created")
})

app.post("/login", async (req, res) => {

    const { email, password } = req.body;
    // console.log(email,password);
    const result = await User.find({ email: email })

    console.log(Promise.resolve(result));

    res.send(`user may login ${result} `)
})

app.listen(port, () => { `listing on ${port}` })