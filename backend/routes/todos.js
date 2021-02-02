const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

module.exports = (app) => {
  app.post('/todos', TodoController.post)
  app.get('/todos', TodoController.index)
  app.delete('/todos', TodoController.delete)
}
