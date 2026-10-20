import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {Type: String},
    email: {Type: String, required: true, unique:true},
    password: {Type: String, required:true},
    address: {Type: String},
    role: {Type: String, enum:["admin","customer"], default:"customer"}
})

const User = mongoose.model("User",userSchema)
export default User;