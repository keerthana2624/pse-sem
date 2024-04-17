// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import DashboardPage from './dashboard';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//       <Switch>
//         <Route path="/login" component={LoginPage} />
//         <Route path="/dashboard" component={DashboardPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;





// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Route for teacher to create a course
app.post('/api/courses', async (req, res) => {
  try {
    // Logic for creating a course (e.g., save to database)
    // Mock response for demonstration
    const newCourse = req.body;
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for student to enroll in a course
app.post('/api/courses/:id/enroll', async (req, res) => {
  try {
    const courseId = req.params.id;
    // Logic for enrolling in a course (e.g., update student's enrolled courses)
    // Mock response for demonstration
    const enrolledCourse = { id: courseId, name: 'Enrolled Course', description: 'Course Description' };
    res.status(200).json(enrolledCourse);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
