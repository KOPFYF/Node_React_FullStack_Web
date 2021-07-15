const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String
});

// create a new collection called users
mongoose.model('users', userSchema); 