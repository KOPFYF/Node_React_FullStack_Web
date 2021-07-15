const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // fetch user object

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => { // callback function
        new User({ googleId : profile.id}).save();
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken); // access expired, so update
        console.log('profile', profile);
      }
    )
);