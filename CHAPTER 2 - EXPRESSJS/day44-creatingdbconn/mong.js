// mongoose.js

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aswin-haridas:abRJj4YYEnotO6HN@cluster0.xrxru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
     { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

  
module.exports = mongoose;