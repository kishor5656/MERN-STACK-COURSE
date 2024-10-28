// models/user.js

const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    degree: String
});

// Create User model from schema
const User = mongoose.model('User', userSchema);

module.exports = User;
