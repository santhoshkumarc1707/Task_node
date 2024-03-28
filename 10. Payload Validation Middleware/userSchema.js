const Joi = require('joi');

// Define schema for validating user object
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required()
});

module.exports = userSchema;
