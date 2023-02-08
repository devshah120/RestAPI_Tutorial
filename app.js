const express = require("express");
const ProductsRoute = require("./routes/products.route");
const app = express();
app.use("/Products", ProductsRoute);

app.listen(3000, () => {
  console.log("This is runnig on port 3000");
});

