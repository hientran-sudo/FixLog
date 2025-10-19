const express = require('express');
const cors = require('cors');
const bugReportRoutes = require('./routes/bugReports');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bug-report', bugReportRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Bug Tracker API is running');
});

module.exports = app;
