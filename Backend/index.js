require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const userRouter = require('./routes/user');
const todoRouter = require('./routes/todo');
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

dbConnect()

app.get("/", (req, res) => {
    res.send("working")
})

app.use(userRouter)
app.use(todoRouter)

app.listen(port, () => { `listing on ${port}` })