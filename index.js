const express =require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const cors = require('cors');
const routers =require("./Routes/loginroute")
const jwt = require('jsonwebtoken');

const BrRouter =routers.routers;
const server = express();
const env = config(); 
server.use(cors());
console.log("hii");

server.use(express.json());
server.use("/",BrRouter
// (req,res)=>{
//     res.end("connected")
// }
);




async function main() {
    await mongoose.connect(process.env.Db_String);
    try{
        console.log('database connected')
    }
    catch(error){
        console.log(error);
    }

  }
  main();


server.listen(9090,()=>{
    
    console.log("connected")
})