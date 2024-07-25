// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://itsforgithub:passwordAtlas@cluster0.dyovyrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
