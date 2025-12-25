const app=require("express")();
const Path=require("path");
// Middleware
app.set("view engine","ejs");
app.use(require("express").json());
app.use(require("express").urlencoded({extended:true}));
app.use(require("express").static(Path.join(__dirname,"public")));
app.use(require("express").static("public"));


app.use(require("cookie-parser")());

// Route: Show register page

app.get("/", (req, res) => {
  res.cookie("token", "sample");
  res.send("Cookie has been set");

});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("read page");
});



const port=3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});