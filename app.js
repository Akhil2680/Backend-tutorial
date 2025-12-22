const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB connection (LOCAL)
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Route: Show register page
app.get("/", (req, res) => {
    res.render("register");
});

// Route: Handle form submission
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    await newUser.save();
    res.send("User Registered Successfully ✅");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
