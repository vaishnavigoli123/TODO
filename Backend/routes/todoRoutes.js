// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

// Routes for Todos
router.post('/todos', createTodo);  // Create a new todo
router.get('/todos', getTodos);     // Get all todos
router.put('/todos/:id', updateTodo);  // Update a todo
router.delete('/todos/:id', deleteTodo);  // Delete a todo

module.exports = router;
