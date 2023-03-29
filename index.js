//Create a server using express and create route /api/main and send the response explaining what is express
const express = require("express");
const app = express();
const port = 3001;
app.get("/",(req,res)=>{
    
    res.send(JSON.stringify({message:'Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.'}));
});
app.get("/about",(req,res)=>{
    
    res.send("Hii reshma");
});
app.listen(port,()=>{
    console.log("Application started");
});