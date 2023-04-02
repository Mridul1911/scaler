const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userinfo:tvxOI82ZGS4bprNo@cluster0.bogpo39.mongodb.net/mridul").then(()=>{
    console.log("Connection Successfull");
}).catch(()=>{
    console.log("Connection Unsuccessfull")
})