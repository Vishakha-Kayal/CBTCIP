import { listEvents,createEvent } from "../controllers/eventController.js";
import express from "express"
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const eventRouter=express.Router();

eventRouter.get('/listEvents',listEvents)
eventRouter.post("/createEvent",upload.single('image'),auth,createEvent)

export default eventRouter; 