const express = require("express");
const app = express();
app.get("/data",(req,res)=>{
    const dummy = [
        {
           Name :" Sachchidanand Gupta",
           city : "Uttar pradesh",
           age : 20
    }
]
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173").json({ Data: dummy })
})
module.exports = app;