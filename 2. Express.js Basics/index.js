const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
// Create an instance of Express application
const app = express();

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define POST route
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Do something with the submitted data (e.g., save to database)
    console.log(`Received data: Name - ${name}, Email - ${email}`);
    res.send('Data submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});