import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import User from '../models/userModel.js';
export default async function verifyToken(verifyObj){
    if(verifyObj===undefined)
    {
        return Promise.reject(new Error('An error occurred'));
    }
    const token=verifyObj.token;
    if(token===undefined || !token)
    {
        return Promise.reject(new Error('An error occurred during sign up.'));
    }
    //verify token
    const decoded = await promisify(jwt.verify)(token, "secret");
    //console.log(decoded);

    //check if user still exists
    const freshUser = await (User.findById(decoded.id));
    if(!freshUser) {
        return Promise.reject(new Error('An error occurred'));  
    }
    //check if user changed 
    return freshUser;

}

