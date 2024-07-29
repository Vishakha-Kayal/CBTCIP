import mongoose from "mongoose"

const connectDB = async () =>{

    mongoose.connection.on("connected",()=>{
        console.log("db connection successfully made");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/event360`);
}

export default connectDB;