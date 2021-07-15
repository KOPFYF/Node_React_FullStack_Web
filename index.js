const express = require('express'); // import express as express
const mongoose = require('mongoose'); // package to interact with MongoDB
const keys = require('./config/keys');

require('./models/User'); // load user schema, then it is used in passport.js
require('./services/passport'); // execute passport.js


mongoose.connect(keys.mongoURI, 
    {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    }
);

const app = express();

require('./routes/authRoutes')(app); // call authRoutes as a method

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