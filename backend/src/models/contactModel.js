import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    fname:{type:String,required:true,trim:true},
    lname:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    query:{type:String,required:true},
});

const contactModel = mongoose.model('contact',contactSchema)
export default contactModel;