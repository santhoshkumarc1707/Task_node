const express = require('express');
const app = express();
const fs = require('fs');

// Define middleware to log errors
const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  // Log error details to a file
  fs.appendFileSync('error.log', `${new Date().toISOString()} - ${err.stack}\n`);
  next(err);
};

// Define middleware to handle errors
const errorHandler = (err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong' });
};

// Register error handling middleware
app.use(logErrors);
app.use(errorHandler);

// Define routes
app.get('/', (req, res) => {
  throw new Error('Test error'); // Simulate an error
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
