const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const validatePayload = require('./validatePayload');
const userSchema = require('./userSchema');

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define route to create a new user
app.post('/users', validatePayload(userSchema), (req, res) => {
  // If payload is valid, create user
  const newUser = req.body;
  // Logic to create user...
  res.status(201).json(newUser);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
