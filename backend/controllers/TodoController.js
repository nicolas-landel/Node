const Todo = require('../models/Todo');

module.exports = {
    async index (req, res) {
        try {
            const allTodos = await Todo.find()
            res.status(200).send(allTodos)
        } catch (err) {
            res.status(500).send({
                error: `an error has occured trying to show the todo, ${err}`
            })
        }
    },
    async post (req, res) {
        try {
            // const todo = await Todo.create(req.body)
            const newTodo = new Todo({
                ...req.body
            })
            newTodo.completed = false
            newTodo.save()
            res.status(201).send()
        } catch (err) {
            res.status(500).send({
                error: `an error has occured trying to create the todo, ${err}`
            })
        }
    },
    async delete (req, res) {
        try {
            await Todo.deleteOne({id: req.body.id})
            console.log("DELETE")
            res.status(200).send({
                message: 'Todo deleted'
            })
        } catch (err) {
            res.status(500).send({err})
        }
    }
}