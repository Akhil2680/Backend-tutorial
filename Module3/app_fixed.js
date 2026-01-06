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

app.get('/products', async (req, res) => {
   let allProducts = await productModel.find({});
   res.render("products", { products: allProducts });
});

app.post('/add-product', async (req, res) => {
  let {name, price, description}=req.body;
  let createdProduct = await productModel.create({
     name,
     price,
     description
  });
   res.send(createdProduct);
});

app.post('/delete-product/:id', async (req, res) => {
   let productId = req.params.id;
   await productModel.findByIdAndDelete(productId);
   res.redirect('/products');
});

app.post('/update-product/:id', async (req, res) => {
   let productId = req.params.id;
   let {name, price, description} = req.body;   
   try {
      await productModel.findByIdAndUpdate(productId, { name, price, description });
      res.redirect('/products');
   } catch (err) {
      res.status(500).send(err.message);
   }
});

// Start the server

app.listen(3000,()=>{
   console.log("Server is running on http://localhost:3000");
});