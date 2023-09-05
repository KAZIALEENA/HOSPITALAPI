# Hospital API Project

This is a simple Node.js and Express application for managing doctors, patients, and medical reports.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Routes](#routes)
- [Contributing](#contributing)


## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB set up and running.


### Usage

## Authentication

This project uses JWT (JSON Web Tokens) for authentication. To use authenticated routes, you will need to obtain a JWT token by logging in as a doctor. Here's how you can do it:

1. Register a doctor by making a POST request to `/doctors/register`.
2. Log in as a doctor by making a POST request to `/login`. You will receive a JWT token in the response.

## Routes

1. Register a Doctor: POST /doctors/register

2. Create a new doctor by providing the required information in the request body.
   Doctor Login: POST `/login`

3. Authenticate as a doctor by providing valid credentials. You will receive a JWT token upon successful login.
   Register a Patient: POST `/patients/register`

4. Create a new patient by providing the required information in the request body. Requires authentication.
   Create a Medical Report: POST `/patients/:id/create_report`

5. Create a medical report for a patient by providing report details in the request body. Requires authentication.
   Get All Reports for a Patient: GET `/patients/:id/all_report`

6. Retrieve all reports for a specific patient. Requires authentication.
   Get All Patients and Their Reports: GET `/patients/:status`

Retrieve all patients along with their reports. Requires authentication.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve this project.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/KAZIALEENA/HOSPITALAPI.git

2. Navigate to the project directory:

   cd hospitalapi

3. Install dependencies:

   npm install

4. Start the server:
   
   npm start

