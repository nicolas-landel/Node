const Todo = require('../models/Todo');
const fs = require('fs');

exports.addTodo = (req, res, next) => {
    const todo = new Todo({
        ...req.body
    });
    todo.save()
        .then(() => res.status(201).json({ message: "object saved!"}))  // promise
        .catch(error => res.status(400).json({error}))
};


exports.getAllTodos = (req, res, next) => {
    Todo.find()
        .then(todos => res.status(200).json(todos))
        .catch(error => res.status(400).json({ error }));
};