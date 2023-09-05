const mongoose = require('mongoose');

// Define the schema for the 'Doctor' collection
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
    },
    password: { 
        type: String,
        required: [true, "Please enter psw"],
    },
});

// Create the 'Doctor' model using the schema
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

