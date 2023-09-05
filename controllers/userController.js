const Doctor = require('../models/doctors');
const Patient = require('../models/patients');
const jwt = require('jsonwebtoken');

// Register a new doctor
module.exports.registerDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success: true,
            message: "Doctor created successfully",
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Could not create a doctor, internal server error",
        });
    }
};

// Log in a doctor and provide a JWT token upon successful login
module.exports.login = async (req, res, next) => {
    try {
        // Use 'await' to wait for the result of the query
        const user = await Doctor.findOne(req.body);

        if (user) {
            // Create a token using 'jwt.sign' with a payload (e.g., user ID)
            const token = jwt.sign({ userId: user.id }, "secret");

            // Send the success response with the token
            return res.status(200).json({
                success: true,
                message: "Doctor logged in successfully",
                token,
            });
        } else {
            // Send a 404 response if no user is found
            return res.status(404).json({
                success: false,
                message: "Name and password do not match",
            });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: "Could not log in, internal server error",
        });
    }
};

// Register a new patient
module.exports.registerPatient = async (req, res, next) => {
    try {

        req.body.doctor = "64f55ac90c8a645b16a51ab9";
        const patient = await Patient.create(req.body);

        res.status(200).json({
            success: true,
            message: "Patient created successfully",
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Could not create a patient, internal server error",
        });
    }
};

// Create a medical report for a patient
module.exports.createReport = async (req, res, next) => {
    try {

        
        const patient = await Patient.findById(req.params.id);

        req.body.date = Date.now();
        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            success: true,
            message: "report submitted successfully",
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Could not create a report, internal server error",
        });
    }
};

// Get all reports for a specific patient
module.exports.all_reports = async (req, res, next) => {
    try {

        
        const patient = await Patient.findById(req.params.id);

        res.status(200).json({
            success: true,
            reports: patient.reports,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Could not create a report, internal server error",
        });
    }
};

// Get all patients along with their reports
module.exports.AllReports = async (req, res, next) => {
    try {
        const patients = await Patient.find().populate('reports');

        res.status(200).json({
            success: true,
            data: patients,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Could not fetch reports, internal server error",
        });
    }
};
