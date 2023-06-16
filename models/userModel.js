import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';
 

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
        // minlength: 2,
        // maxlength: 16

    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        //This only works on create and save
        validate: {
            validator: function(el) {
                return el === this.password;
            },
        message: 'Password is not same'
        }
    },
    key: {
        type: String,
        required: [true, 'Please enter your decryption key!'],
        // minlength: 2,
        // maxlength: 16
    },
    confirmKey: {
        type: String,
        required: [true, 'Please confirm your key'],
    },
    userDetail:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'UserDetail',
        }
    ]

});

userSchema.pre('save', async function(next){
    //only run this function if password was actually modified
    if(!this.isModified('password')) return next();
    
    //hash the password with the cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    //Delete passwordConfirm field
    this.confirmPassword = undefined;
    next();

})

const User= mongoose.model('User', userSchema);

export default User;
