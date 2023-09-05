const mongoose = require('mongoose');

// Define the schema for the 'Patient' collection
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    reports: [
        {
            status: {
                type: String,
                required: true,
                enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"],
            },
            date: {
                type: Date,
                required: true,
            }
        }
    ],
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", // Make sure you have imported the "Doctor" model correctly
        required: true,
    }
});

// Create the 'Patient' model using the schema
const Patient = mongoose.model('Patient', patientSchema);

// Export the 'Patient' model for use in other modules
module.exports = Patient;
