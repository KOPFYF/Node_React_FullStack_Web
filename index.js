const express = require('express'); // import package
const app = express();

// route handler

// app: express app to register this route handler with
// get: get request, watch for incoming http requests (get, post, put, delete, patch)
// '/': watch for incoming '/', like subfolder, http://localhost:5000 => http://localhost:5000/
// req: object of incoming request
// res: object of outgoing response
app.get('/', (req, res) => {
    res.send({bye: '888'}); // send some json back to whoever made this request
});

// by https://dashboard.heroku.com/apps or local test default=5000
const PORT = process.env.PORT || 5000; 
app.listen(PORT); // port id