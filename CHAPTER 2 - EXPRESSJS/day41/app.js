const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample data (initially empty)
let users = [];

// Routes
// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update an existing user
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    let user = users.find(u => u.id === parseInt(userId));
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.name = name;
    user.email = email;
    res.json(user);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    users = users.filter(u => u.id !== parseInt(userId));
    res.json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
