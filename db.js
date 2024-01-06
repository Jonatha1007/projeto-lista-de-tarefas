// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
