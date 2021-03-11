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
        console.log("poooost", req.body)
        if ('title' in req.body) {
            try {
                // const todo = await Todo.create(req.body)
                const newTodo = new Todo({
                    ...req.body
                })
                newTodo.completed = false
                newTodo.save()
                const allTodos = await Todo.find()
                res.status(201).send({
                    todos: allTodos
                })
            } catch (err) {
                res.status(500).send({
                    error: `an error has occured trying to create the todo, ${err}`
                })
            }
        } else if ('completed' in req.body) {
            try {
                let todo = await Todo.findById(req.body.completed)
                todo.completed = !todo.completed
                todo.save()
                res.status(200).send({
                    message: 'Todo updated'
                })
            } catch (err) {
                res.status(500).send({
                    error: `an error has occured trying to create the todo, ${err}`
                })
            } 
        }
    },
    async delete (req, res) {
        console.log("delete", req.body._id)
        try {
            await Todo.deleteOne({id: req.body._id})
            const allTodos = await Todo.find()
            res.status(200).send({
                message: 'Todo deleted',
                todos: allTodos
            })
        } catch (err) {
            res.status(500).send({err})
        }
    }
}