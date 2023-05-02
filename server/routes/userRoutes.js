import express from "express";
import {registerController, loginController, userDataController, updateLevelController, getAllUserController} from "../controllers/userCtrl.js";

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Hello');
})

userRouter.post('/register', registerController);
userRouter.post('/login', loginController);
userRouter.post('/getUserData', userDataController);
userRouter.post('/update-level', updateLevelController);
userRouter.post('/getAllUsers', getAllUserController);

export default userRouter;