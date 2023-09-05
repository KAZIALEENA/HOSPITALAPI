const mongoose = require('mongoose');


// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/hospitalapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
});

const db = mongoose.connection; 

// Error
db.on('error', console.error.bind(console, 'Error connecting to database:'));

// Connection successful
db.once('open', function() {
  console.log("Successfully connected to database");
});
