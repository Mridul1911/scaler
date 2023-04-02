const express = require("express");
const port = process.env.PORT || 5000;
const router=require("./routes/router")
const app = express();

require("./dbconnect/connection")
app.use(router);
app.get("/",(req,res)=>{ 
    res.status(200).send("hello")
})
app.listen(port, () => {
    console.log(`Localhost is listening at http://localhost:${port}`)
})    