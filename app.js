const express = require("express");
const mongoose = require("mongoose");
const ProductsRoute = require("./routes/products.route");
const createError = require("http-errors");
const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:admin@demo.56us5gq.mongodb.net/Restapi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongodb Connected");
  });
  
app.use("/Products", ProductsRoute);

app.use((req, res, next) => {
  //   const err = new Error("Page Not Found");
  //   err.status = 404;
  //   next(err);
  next(createError(404, "Page Not Found"));
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
app.listen(3000, () => {
  console.log("This is runnig on port 3000");
});
