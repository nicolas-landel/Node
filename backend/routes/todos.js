const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todos');

router.post('/', todoController.addTodo);
router.get('/', todoController.getAllTodos);

module.exports = router;