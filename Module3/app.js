const express=require("express");
const app=express();
const Path=require("path");
const productModel=require("./models/product"); 
// Middleware
app.set("view engine","ejs");
app.use(express.json());
app.use(require("express").urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,"public")));
app.use(express.static("public"));  

// Route: Show home page
app.get("/",(req,res)=>{
   res.render("index"); 
});