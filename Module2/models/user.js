const app=require("express")();
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Userdatabase")
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});

const userSchema=new mongoose.Schema({
    image: String,
    email:String,
    name: String
});

module.exports=mongoose.model("user",userSchema);