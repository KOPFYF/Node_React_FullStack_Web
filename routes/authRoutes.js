const passport = require('passport');

module.exports = (app) => { // app as a function
    app.get(
        '/auth/google',
        passport.authenticate('google', {
          scope: ['profile', 'email'] // ouath credential works here
        })
      );
      
      
    app.get('/auth/google/callback',
        passport.authenticate('google') // redirect to server
    );
}

