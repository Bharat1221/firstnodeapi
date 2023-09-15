const express = require("express");
const authController = require("../Controller/loginController");
const userController = require("../Controller/formController");
const router = express();

router
.get('/userdata',authController.Allusers)
.get('/userdata/:id',authController.UserbyId)
// .get('/:id',(req,res)=>{
//     const id = req.params;
//     console.log(id);
//     res.end(id.id);
// })
.post('/updateuser/:id',authController.updateUser)
.post('/createuser',authController.CreateUser)
.post('/login',authController.login)
.post('/form',userController.UserData)
.get('/submittedformdata',userController.AllsubmitedUsers)


exports.routers=router;
