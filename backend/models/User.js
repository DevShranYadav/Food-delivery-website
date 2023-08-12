const mongoose=require('mongoose');

const {Schema}=mongoose;

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
   location:{
    type:String
   },
   email:{
    type:String,
    requied:true,
   },
   date:{
    type:Date,
    default:Date.now,
   }  
})

module.exports=mongoose.model("users",UserSchema);

