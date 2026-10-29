const express = require("express")
const app = express()
const port =3000


app.use((req,res)=>{
    res.send("helloe welcome !!!!!!")
})

app.listen(port,()=>{
    console.log("server is listing on port : ",port);
})