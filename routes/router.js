const express = require('express');
const { registerDoctor, registerPatient, createReport, all_reports, AllReports, login } = require("../controllers/userController");
const passport = require("passport");
const router = express.Router();

// Add middleware to parse the request body
router.use(express.json());

// Define the route handler for registering a doctor
router.post("/doctors/register", registerDoctor);

// Define the route handler for user login.
router.post("/login", login);

// Define the route handler for registering a patient. This route is protected and requires authentication using Passport's JWT strategy.
router.post("/patients/register", passport.authenticate('jwt', {session: false}), registerPatient);

// Define the route handler for creating a report for a patient. This route is protected and requires authentication using Passport's JWT strategy.
router.post("/patients/:id/create_report", passport.authenticate('jwt', {session: false}), createReport);

// Define the route handler for fetching all reports for a patient.
router.get("/patients/:id/all_report", all_reports);

// Define the route handler for fetching all reports with a specific status for patients. This route is protected and requires authentication using Passport's JWT strategy.
router.get('/patients/:status', AllReports);

module.exports = router;
