const Category = require("../models/Category.js");
const express =require("express");
const router =express.Router();


router.get("/get-all" , async (req, res)=>{
    try{
         const categorys = await Category.find();
         res.status(200).json(categorys)
    }catch (error){
        res.status(400).json(error)
    }
})


router.post("/Category" , async (req, res)=>{
    try{
         const newCategory = new Category(req.body);
         await newCategory.save();
         res.status(200).json("Melumat yadasa verildi")
    }catch (error){
        res.status(400).json(error)
    }
})

router.put("/update-category" , async (req, res)=>{
    try{
         await Category.findOneAndUpdate({_id: req.body._id},req.body)
         res.status(200).json("update")
    }catch (error){
        res.status(400).json(error)
    }
})

router.delete("/delete-category" , async (req, res)=>{
    try{
         await Category.findOneAndDelete({_id: req.body._id},req.body)
         res.status(200).json("delet")
    }catch (error){
        res.status(400).json(error)
    }
})


module.exports=router;