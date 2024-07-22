import mongoose from "mongoos";

const userSchema = new mongoose.Schema ({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,requied:true},
    taskData:{type:Object,default:{}}
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;