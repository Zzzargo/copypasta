const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/recipeApp';

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection failed:', err));