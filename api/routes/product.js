const product = require("../models/product.js");
const express =require("express");
const router =express.Router();


router.get("/get-all" , async (req, res)=>{
    try{
         const products = new product(req.body);
         res.status(200).json(products)
    }catch (error){
        res.status(400).json(error)
    }
})


router.post("/add-product" , async (req, res)=>{
    try{
         const newProduct = new product(req.body);
         await newProduct.save();
         res.status(200).json("sjhdgshjdghjs")
    }catch (error){
        res.status(400).json(error)
    }
})

router.put("/update-product" , async (req, res)=>{
    try{
         await product.findOneAndUpdate({_id: req.body._id},req.body)
         res.status(200).json("update")
    }catch (error){
        res.status(400).json(error)
    }
})

router.delete("/delete-product" , async (req, res)=>{
    try{
         await product.findOneAndDelete({_id: req.body._id},req.body)
         res.status(200).json("delet")
    }catch (error){
        res.status(400).json(error)
    }
})


module.exports=router;
