import userPage from "../pages/user.js";

export default async function errorHandling(err)
{
    console.log(err.message);
    userPage();
}