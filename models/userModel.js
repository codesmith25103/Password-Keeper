import mongoose from 'mongoose';
 

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
        minlength: 2,
        maxlength: 16

    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
    },
    key: {
        type: String,
        required: [true, 'Please enter your decryption key!'],
        minlength: 2,
        maxlength: 16
    },
    keyConfirm: {
        type: String,
        required: [true, 'Please confirm your key'],
    }

});

const User= mongoose.model('User', userSchema);

export default User;
