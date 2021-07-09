const express = require('express'); // import express as express
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] // ouath credential works here
  })
);


app.get('/auth/google/callback',
  passport.authenticate('google') // redirect to server
);


// by https://dashboard.heroku.com/apps or local test default=5000
const PORT = process.env.PORT || 5000; 
app.listen(PORT); // port id







// code practice 0: hello world of route handler
// app: express app to register this route handler with
// get: get request, watch for incoming http requests (get, post, put, delete, patch)
// '/': watch for incoming '/', like subfolder, http://localhost:5000 => http://localhost:5000/
// req: object of incoming request
// res: object of outgoing response
// app.get('/', (req, res) => {
//     res.send({bye: '888'}); // send some json back to whoever made this request
// });