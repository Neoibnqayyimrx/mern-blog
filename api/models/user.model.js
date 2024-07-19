import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GHGGLYe7gDfZUzF_tElxiQHaHa%26pid%3DApi&f=1&ipt=3892c0353f35a19cc062d3b17c1b2f3e835222abbf4e4164d595e288fa761e66&ipo=images",
    },
},  {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;