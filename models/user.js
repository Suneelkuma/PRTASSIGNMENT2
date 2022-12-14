const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    age:Number
})

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;