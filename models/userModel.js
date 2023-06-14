const mongoose = require('mongoose');
 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name!']
    },
    username: {
        type: String,
        required: [true, 'Please enter your username!'],
        unique: true,
        
    },
    password: {
        type: String,
        required: [true, 'Please enter your password!'],

    },
    key: {
        type: String,
        required: [true, 'Please enter your decryption key!'],
        minlength: 8,
        maxlength: 16
    }

})
