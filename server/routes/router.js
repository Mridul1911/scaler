const { urlencoded } = require("express");
const express=require("express");
const router= new express.Router();
const app=express();
router.use(express.json());
router.use(urlencoded({extended:"true"}))
const userModel=require("../model/userModel")
router.get('/home',async (req,res)=>{
    res.send("HELLO")
})
router.post("/enroll",async(req,res)=>{
    console.log(req.body)
    const user=new userModel(req.body)
    const userData=await user.save()
    try{
        console.log(userData)
        res.status(200).json({msg:"Successfully inserted"})
    }catch(err){
        res.status(200).json({msg:"unable to insert"})
    }
})

router.get("/user",async(req,res)=>{
    const result=await userModel.find({mentor:""});
    res.status(200).json(result);
})
router.get("/active",async(req,res)=>{
    const result=await userModel.find();
    res.status(200).json(result);
})
router.post("/updateMentor",async(req,res)=>{
    console.log(req.body);
    const result=await userModel.updateMany({_id:{$in:req.body}},{mentor:"mentor1"});
    console.log(result)
})
module.exports = router; 