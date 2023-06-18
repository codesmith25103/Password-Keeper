import UserDetail from "../models/userDetailModel.js";
import verifyToken from "../utils/verifyToken.js";

export default async function userAllPassword(userDetail, loginObject) {
    try {
        let freshUser = await verifyToken(loginObject);
        console.log(freshUser);
        const createPassword = new UserDetail(userDetail);
        console.log(createPassword);
        freshUser.userDetail.push(createPassword); // Add the new UserDetail object to the userDetail array
        await createPassword.save();
        await freshUser.save({ validateBeforeSave: false }); // Save the updated freshUser object with the new userDetail
        
    } catch (error) {
        console.log("Couldn't save the password", error);
    }
}
