const express = require("express");
const ProductsRoute = require("./routes/products.route");
const app = express();
app.use("/Products", ProductsRoute);

app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status=404;
  next(err);
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
