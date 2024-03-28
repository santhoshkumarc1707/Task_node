const express = require('express');
const app = express();

// Custom middleware to log request details
const logger = (req, res, next) => {
  console.log(`Request URL: ${req.url}, Method: ${req.method}`);
  next(); // Call the next middleware in the stack
};

// Register the custom middleware globally
app.use(logger);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
