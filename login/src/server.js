const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample users data for demonstration
const users = [
  { username: 'student@example.com', password: 'password', role: 'student' },
  { username: 'teacher@example.com', password: 'password', role: 'teacher' },
];

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // For simplicity, sending user role in response
    res.json({ role: user.role });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
