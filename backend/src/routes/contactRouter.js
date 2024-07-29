import sendMail from "../config/nodemailer.js";
import express from "express"
import contactModel from "../models/contactModel.js"

const contactRouter=express.Router();

contactRouter.post('/contact',async(req,res)=>{
    try {
        const {fname,lname,email,query} = req.body;
        // await sendMail(email,query);
        const contact = new contactModel({
            fname,
            lname,
            email,
            query
        })
        await contact.save();
        res.json({success:true,message:"successfully send"})
    } catch (error) {
        console.error("Error saving contact:", error); // Log any errors
        res.json({ success: false, error: error.message });
    }
})

export default contactRouter;