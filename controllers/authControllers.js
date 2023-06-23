import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default async function login(user) {
    const userName = user.username;
    const userPassword = user.password;
    let user1;

    // Check if username and password exist
    if (!userName || !userPassword) {
        return Promise.reject(new Error("An error occurred"));
    } else {
        //console.log(user);

        user1 = await User.findOne({ username: userName });

        const token = jwt.sign({ id: user1._id }, "secret");
        // const token = jwt.sign(
        //     { userid: tempuser.userid },
        //     process.env.SECRET_KEY
        //   );
        const validPassword = await bcrypt.compare(userPassword, user1.password);

        if (!validPassword) {
            return Promise.reject(new Error("An error occurred"));
        } else {
            const tokenObject = {
                status: "success",
                statusCode: "201",
                token
            };

            return tokenObject;
        }
    }
}
