// routes.js

const express = require('express');
const Task = require('./Task');

const router = express.Router();

// Rota para listar todas as tarefas
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para criar uma nova tarefa
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Rota para atualizar uma tarefa existente
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Rota para excluir uma tarefa
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndRemove(id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

module.exports = router;
