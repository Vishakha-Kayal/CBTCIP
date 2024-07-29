import  express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import eventRouter from "./src/routes/eventRouter.js"
import contactRouter from './src/routes/contactRouter.js';
import userRouter from './src/routes/userRoute.js';


//app config
const app=express();
const port=process.env.PORT||3000;
connectDB();
connectCloudinary();

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:5173', 'http://www.liveupdt.com'], // Update this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api',eventRouter)
app.use('/api/query',contactRouter)
app.use('/users',userRouter)

//initialising routes
app.get("/",(req,res)=>{
    res.send("app working");
})

app.listen(port,()=>{
    console.log(port,"listening");
})