const Todo = require('../models/Todo');

module.exports = {
    async index (req, res) {
        try {
            const allTodos = await Todo.find()
            res.status(200).send(allTodos)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to show the todos'
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
                error: 'an error has occured trying to create the todo'
            })
        }
    }
}