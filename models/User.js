// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['customer', 'admin', 'reviewer', 'guest'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
