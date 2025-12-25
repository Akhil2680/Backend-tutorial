const express=require("express");
const app=express();
const Path=require("path");
const mongoose=require("mongoose");
// Middleware
app.set("view engine","ejs");
app.use(express.json());
app.use(require("express").urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,"public")));
app.use(express.static("public"));




// Route: Show register page
app.get("/",(req,res)=>{
   res.render("index");
}); 


app.get('/delete/:id', async (req, res) => {
 
  let users = await userModel.findByIdAndDelete({_id: req.params.id});
   res.redirect('/read');
});

// Start the server




app.listen(3000,()=>{   
   console.log("Server is running on port 3000");
});