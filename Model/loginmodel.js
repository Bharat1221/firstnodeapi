const mongoose = require('mongoose');
const { Schema } = mongoose;

  const loginSchema = new Schema({
    name: { type: String ,unique: true },
    password: { type: String },
    username: { type: String },
    role: { type: String },
    token: { type: String }
  },{collection:`users`},{strict: true});
  
  
exports.authorization = mongoose.model('users', loginSchema);