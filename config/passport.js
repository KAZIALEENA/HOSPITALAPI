const passport = require('passport');  // Import the Passport library, which is used for authentication.
const Doctor = require('../models/doctors');  // Import the Doctor model, presumably used for authentication.
const JwtStrategy = require('passport-jwt').Strategy;  // Import the JWT strategy for Passport.
const ExtractJwt = require('passport-jwt').ExtractJwt; // Import the JWT extraction method for Passport.

// Define the options (configuration) for the JWT authentication strategy.
const opts = {
    // Extract JWT from the 'Authorization' header as a bearer token.
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // Set the secret key used to verify JWT tokens.
  secretOrKey: 'secret',
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
         // Attempt to find a Doctor in the database using the 'id' from the JWT payload.
      const user = await Doctor.findOne({ id: jwt_payload.id });

      if (user) {
        // If a Doctor with the specified 'id' is found, return that user as authenticated.
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      // Handle any errors that occur during the authentication process.
      return done(error, false);
    }
  })
);

module.exports = passport;
