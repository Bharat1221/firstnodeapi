const mongoose = require('mongoose');
const { Schema } = mongoose;

  const formdata = new Schema({
    name: { type: String ,unique: true },
    age: { type: Number },
    mobnumber: { type: Number },
    education: { type: String },
    profession: { type: String },
    city: { type: String },
    date: { type: String },
  },{collection:`formdata`},{strict: true});
  
  
exports.formdata = mongoose.model('formdata', formdata);