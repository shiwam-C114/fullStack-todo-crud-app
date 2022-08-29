const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    taskname: String,
    status: String,
    tag: String
})

const Todo = mongoose.model("todo", todoSchema)

module.exports = Todo
