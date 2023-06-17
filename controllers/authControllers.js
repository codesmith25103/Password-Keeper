// const User = require('./../models/userModel');
// const jwt = require('jsonwebtoken');
import User from "../models/userModel.js";
import  jwt  from "jsonwebtoken";

// exports.signup = async( req, res, next) =>{
//     const newUser = await User.create({
//         name: req.body.username,
//         password: req.body.password

//     });
// const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPRESS_IN      s
// })

// res.status(201).json({
//     status: 'success',
//     data: {
//         user:newUser  
//     }

// })
// }

 
export default async function login(user){

}
