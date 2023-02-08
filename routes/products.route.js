const express = require('express');
const router = express.Router()

//For Getting Products 
router.get('/',(req,res,next) => {
    res.send('Gettig all products list')
})

//For Adding Products 
router.post('/',(req,res,next)=>{
    res.send('Product Created.')
})

//For Getting Products By ID
router.get('/:id',(req,res,next)=>{
    res.send('Product Found.')
})

//For Updating Products By ID
router.patch('/:id',(req,res,next)=>{
    res.send('Product Updated.')
})

//For Delete Products By ID
router.delete('/:id',(req,res,next)=>{
    res.send('Product Deleted.')
})

module.exports=router;