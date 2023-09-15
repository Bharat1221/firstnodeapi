const auth_model = require('../Model/loginmodel');
const Users = auth_model.authorization;
const jwt = require('jsonwebtoken');


exports.CreateUser = async (req,res)=>{
    var data = req.body;
    console.log(JSON.stringify(req.body));
    var token = jwt.sign({ username: data.username }, 'shhhhh');
    var finduser = await Users.findOne({username:`${data.username}`});
    var finduserdetail = await Users.findOne({name:`${data.name}`});
    console.log("finduser",finduser);
    console.log("data.username"+data.username);
    if(finduser===null && finduserdetail===null){
        console.log("nulllllllll");
        let new_user = new Users({
            name: `${data.name}`,
            username: `${data.username}`,
            role: `${data.role}`,
            password: `${data.password}`,
            token:`${token}`,
        });
        console.log(new_user)
        new_user.save();
        res.json({"token":token,"name":data.name,"message":"Successfully Created"});
        res.end();



        // res.json({"token":token,"name":data.name});
    }
    else if(finduser!=null || finduserdetail===null){
        if(finduser.username===data.username){
            res.json({message:"Login Name Already Exist"});

        }
    }
    else if(finduser===null || finduserdetail!=null){
       if(finduserdetail.name===data.name){
            res.json({message:"Username Already Exist"});

        }
    }
     else{
       
       
        console.log("eXIST");
    //     var new_user = new Users({
    //         name: `${data.name}`,
    //         username: `${data.username}`,
    //         role: `${data.role}`,
    //         password: `${data.password}`,
    //         token:`${token}`,
    //     })


    // new_user.save()
    // new_user.save((err, doc) => {
    //     console.log({ err, doc });
    //     if (err) {
    //         res.send(err)
    //       res.status(400).json(err);
    //     } else {
    //         res.send("201")
    //       res.status(201).json({token});
    //     }
    //   });
    // res.json({"token":token,"name":data.name,"message":"Successfully Created"});

    res.end();

    }

}

exports.login = async (req,res)=>{
    var data = req.body;
    console.log(data.email);
    var emailData = await Users.findOne({email:`${data.email}`});
    console.log(data.email);
    console.log(emailData);
    // jwt.verify(emailData.token, 'shhhhh', function(err, decoded) {
    //     try{
    //         console.log(decoded) // bar
    //     }
    //     catch{
    //         console.log(err) // bar
    //     }

    //   });
    console.log([{"message":"not Exist"}])
      if(emailData==null){
        res.send([{"message":"not Exist"}]);
        console.log([{"message":"not Exist"}])
    }else if(data.email==emailData.email){
        // res.json({"token":emailData.token,"message":"successfully Login","name":emailData.name});
        res.send([{"message":"Successfully Login"},{"token":`${emailData.token}`},{"name":`${emailData.name}`}]);
        console.log("Successfully Login") // bar
    }
    else{
       res.send("Invalid Credentials");
    }


    // console.log("new_user"+ JSON.stringify(data))
    // new_user.save()

    res.end();
}

exports.Allusers = async (req,res)=>{
    var data = await Users.find();
    res.send(JSON.stringify(data));
    res.end();
}
exports.UserbyId = async (req,res)=>{
    console.log(req.params)
    var id = req.params.id;
    var data = await Users.findOne({ name: `${id}`})
    // console.log(data);
    // console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
    // res.send("JSON.stringify(data)");
    res.end();
}
// exports.updateUser = async (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     console.log(id);
//     console.log(data);
//     const userIndex = await Users.findOneAndUpdate({_id:id},{ $set : {
//         // name: `${req.body.name}`,
//         name: `${data.name}`,
//         username: `${data.username}`,
//         password: `${data.password}`,
//         role: `${data.role}`,
//     }})
 
//     // const user = Users[userIndex];
//     // Users.splice(userIndex, 1, { ...user, ...req.body });
//     res.status(201).json();
//     res.end();
//   };
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    var data = req.body;
    // const mongid = await Users.find({_id:ObjectId("649d4a58a16e860dcd687432")})
    // console.log("mongid", mongid);
    var myquery = { name: `${data.name}` };
    var newvalues = { $set: {name: `${data.name}`, username: `${data.username}` ,password:`${data.password}`,role:`${data.role}` } };
    const userlist = await Users.updateOne(myquery, newvalues);
    // .findOneAndUpdate({_id:id},{
    //     name: `${data.name}`,
    //         // age:data.age,
    //         // __v:data.age,
    // })
    // res.send(id+" Updated");
    res.send([{"message":"Successfully Update"}]);
    console.log(userlist)

    res.end();
  };