import userModel from "../mongodb/model/users.js";
import bcrypt from "bcryptjs";
// import CryptoJS from "crypto-js";

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({email : req.body.email});
        if(existingUser){
            return res.status(200).send({
                success: false,
                msg: "User Already Exists"
            })
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        req.body.password = hashedPass;
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).send({
            success: true,
            msg: "User Created Successfully"
        })
    } catch (error) {
        return res.status(500).send({success: false, msg: error})
    }
}

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email : req.body.email});
        if(!user){
            return res.status(200).send({
                success: false,
                msg: "User Not Found"
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res.status(200).send({
                success: false,
                msg: "Password doesn't match"
            })
        }
        res.status(200).send({
            success: true,
            msg: `Hello ${user.userName} Logged In Successfully`,
            _id: user._id
        })
    } catch (error) {
        res.status(500).send({success: false, msg: error})
    }
}

const userDataController = async (req, res) => {
    try {
        const userId = req.body._id;
        const user = await userModel.findById(userId);
        if(!user){
            return res.status(200).send({
                success: false,
                msg: "Session expired, log in again"
            });
        }
        return res.status(200).send({
            success : true,
            user
        });
    } catch (error) {
        res.status(500).send({success: false, msg: error});
    }
}

const updateLevelController = async (req, res) => {
    try {
        const userId = req.body._id;
        const newLevel = req.body.newLevel;
        const {index, timeTaken, tries} = req.body;
        const user = await userModel.findById(userId);
        user.lastSolved = newLevel;
        user.timeTaken.set(index, timeTaken);
        user.tries.set(index, tries);
        user.save();
        return res.status(200).send({
            success : true,
            msg : "Congratulation!!! Go to next level"
        })
    } catch (error) {
        return res.status(500).send({
            success : false,
            msg : error
        })
    }
}

const getAllUserController = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            success : true,
            users
        })
    } catch (error) {
        return res.status(500).send({
            success : false,
            msg : error
        })
    }
}

export {
    registerController,
    loginController,
    userDataController,
    updateLevelController,
    getAllUserController
}