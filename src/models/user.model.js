const mongoose=require("mongoose")

const user=new mongoose.Schema({
   name:{
    type:String,
    required:true,
    unique:true 
   },
   password:{
    type:String,
   
},
    email:{
    type:String,
    required:true,
    unique:true 
    }

})

const UserModel=mongoose.model("users",user)

module.exports=UserModel