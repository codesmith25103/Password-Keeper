import UserDetail from "../models/userDetailModel.js";

export default async function userAllPassword(userDetail) {
    try {
        const createPassword = new UserDetail(userDetail);
        console.log(createPassword);
        await createPassword.save();

    } catch(error) {
       console.log("couldn't save the password", error);
    }
}