const auth_model = require('../Model/formSchema');
const Users = auth_model.formdata;
const jwt = require('jsonwebtoken');


exports.UserData = async (req,res)=>{
    console.log(req.body);
    var data = req.body;
    let new_user = new Users({
        name: `${data.name}`,
        age: `${data.age}`,
        mobnumber: `${data.mobnumber}`,
        education: `${data.education}`,
        profession: `${data.profession}`,
        city: `${data.city}`,
        language: `${data.language}`,
        date:`${data.date}`
    });
    new_user.save();
    res.send([{"message":"Successfully Update"}]);
    res.end();
}
exports.AllsubmitedUsers = async (req,res)=>{
    var data = await Users.find();
    res.send(JSON.stringify(data));
    res.end();
}
