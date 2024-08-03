// import auth from "../middlewares/auth.js"
import { createUser,authUser,getUserWithId,editEvent,deleteEvent } from "../controllers/userController.js";
import express from "express"

const userRouter=express.Router();

userRouter.post("/createAccount",createUser)
userRouter.post("/loginuser",authUser)
userRouter.post("editThis/:userId",editEvent)
userRouter.post("deleteThis/:userId",deleteEvent)
userRouter.get("/userWith/:userId",getUserWithId)

export default userRouter;
