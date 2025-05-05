import User from "../models/user.model.js";
import { sendError, sendSuccess } from "../utils/handleResponse.js";

export async function signup(req, res) {
    const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return sendError(res, 409, "User already Exists")
        }

        const user = await User.create({ name, email, password })
        return sendSuccess(res, 201, "User created Successfully", {...user, password: undefined})

    } catch (error) {
        console.log("Error signing up", error.message);
        return sendError(res, 500, error.message)
    }
}
export async function login(req, res) {
    
}
export async function logout(req, res) {
    
}