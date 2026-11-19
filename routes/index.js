const express=require('express');
const router=express.Router();


router.get("/fetch",(req,res)=>{
    res.status(200).json({"name":"jeevanantham S","age":22});
});

router.post("/create",(req,res)=>{
    const data=req.body;
    console.log("name ",data.name," ",data.age);
    res.status(201).send("created successfully");
});

router.get("/routeparameter/:id/:name",(req,res)=>{
    const data=req.params;
    res.status(200).json({"id":data.id,"name":data.name});
});

router.get("/queryparameter/:id",(req,res)=>{
    const data=req.params;
    const data2=req.query;
    res.status(200).json({"id":data.id,"name":data2.name});
})

module.exports=router;