import jwt from 'jsonwebtoken';
import {promisify} from 'util';

export default async function verifyToken(token){

    if(token===undefined || !token)
    {
        return Promise.reject(new Error('An error occurred'));
    }
    //verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    //console.log(decoded);

    //check if user still exists
    const freshUser = await (User.findById(decoded.id));
    if(!freshUser) {
        return Promise.reject(new Error('An error occurred'));  
    }
    //check if user changed 
    return freshUser;

}

