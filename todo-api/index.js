const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// In-memory storage
let todos = [];
let nextId = 1;

// 전체 TODO 조회
app.get('/todos', (req, res) => {
  res.json(todos);
});

// 단일 TODO 조회
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// TODO 생성
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });

  const todo = {
    id: nextId++,
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// TODO 수정
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// TODO 삭제
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`TODO API server running on http://localhost:${PORT}`);
});
