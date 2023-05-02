import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: [true, 'Name is required']
    },
    email : {
        type: String,
        required: [true, 'Email is required']
    },
    password : {
        type: String,
        required: [true, 'Password is required']
    },
    lastSolved : {
        type: Number,
        default: 0
    },
    timeTaken : {
        type : [Number],
        default : [0, 0, 0, 0, 0, 0]
    },
    tries : {
        type : [Number],
        default : [0, 0, 0, 0, 0, 0]
    }
});

const userModel = mongoose.model('users', UserSchema);
export default userModel;