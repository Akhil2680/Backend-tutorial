const app=require("express")();
const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

exports.User=mongoose.model("User",userschema);