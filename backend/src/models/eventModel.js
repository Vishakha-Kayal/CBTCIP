import mongoose from "mongoose";

const attendeeData= new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    contactNumber:{type:String,required:true},
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"event"
    }
})

const eventSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name:{type:String,required:true},
    organiser:{type:String,required:true},
    category:{type:String,required:true},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    startTime: { type: String, required: true }, 
    endTime: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    contactInformation: { type: String, required: true },
    banner: { type: String, required: true } ,
    attendee:[attendeeData],
    eventType: { type: String, enum: ['ticketed', 'free'], required: true }, 
    ticketName: { type: String }, 
    ticketPrice: { type: Number }, 
}, { timestamps: true });


const eventModel = mongoose.models.event || mongoose.model("event",eventSchema)
export default eventModel;
    