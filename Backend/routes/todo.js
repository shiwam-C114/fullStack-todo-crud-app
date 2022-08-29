const { Router } = require('express');
const Todo = require('../models/Todo');

const todoRouter = Router()
todoRouter.get("/todos", async (req, res) => {
    try {
        const tag = req.query.tag || ""
        const status = req.query.status || ""
        console.log(tag, "--tag", status, "---status");
        const todos = await Todo.find({ tag: { $regex: tag, $options: "i" }, status: {$regex: status, $options: "i" } })
        const response = {
            error: false,
            todos: todos
        }
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: true, msg: "Internal server error" })
    }
})

todoRouter.post("/todos", async (req, res) => {
    try {
      
        console.log(req.body);
        


        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: true, msg: "Internal server error" })
    }
})


module.exports = todoRouter