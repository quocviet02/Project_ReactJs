import mongoose from "mongoose";
const Blog = mongoose.Schema({
    title:{
        type:String,
        maxLength:300,
        require:true
    },
    content:{
        type:String,
        maxLength:1000, 
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
    
})
export default mongoose.model("Blog",Blog)