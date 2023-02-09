import mongoose from "mongoose";
const User = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    username:{
        type:String
       
        
    },
    avata:{
        type:String
        
    }
})
export default mongoose.model("User",User)