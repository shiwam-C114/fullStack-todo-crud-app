const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    taskName: String,
    status: String,
    tag: String
})

const Todo = mongoose.model("user", todoSchema)

module.exports = Todo
