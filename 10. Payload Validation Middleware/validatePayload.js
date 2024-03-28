const Joi = require('joi');

// Middleware function to validate request payloads
const validatePayload = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      // If validation fails, return 400 Bad Request with error details
      return res.status(400).json({ error: error.details[0].message });
    }
    // If validation passes, call the next middleware in the stack
    next();
  };
};

module.exports = validatePayload;
