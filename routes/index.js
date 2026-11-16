const express=require('express');
const router=express.Router();


router.get("/hello",(req,res)=>{
    res.send("morning buddy");
})

module.exports=router;