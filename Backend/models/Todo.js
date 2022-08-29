const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    taskName: String,
    status: String,
    tag: String
})

const Todo = mongoose.model("todo", todoSchema)

module.exports = Todo
