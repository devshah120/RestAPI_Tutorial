const express = require("express");
const router = express.Router();
const Product = require("../models/products.model");

//For Getting Products
router.get("/", async (req, res, next) => {
  try {
    const result = await Product.find({}, { __v: 0 });
    // const result = await Product.find({price:2999},{__v:0});
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

//For Adding Products
router.post("/", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
  // Save Product In MongoDB using JS Promises
  //   const product = new Product({
  //     name: req.body.name,
  //     price: req.body.price,
  //   });
  //   product.save().then(result=>{
  //     console.log(result);
  //     res.status(200).send(result);
  //   }).catch(err=>{
  //     console.log(err.message);
  //   })
});

//For Getting Products By ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Product.findById(id, { __v: 0 });
    // const result = await Product.findOne({_id:id}, { __v: 0 });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

//For Updating Products By ID
router.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const update = req.body;
  const option = {new:true}
  try {
    const result = await Product.findOneAndUpdate({ _id: id },update,option);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

//For Delete Products By ID
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Product.findOneAndDelete({ _id: id }, { __v: 0 });

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
