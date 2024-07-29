// import auth from "../middlewares/auth.js"
import { createUser,authUser } from "../controllers/userController.js";
import express from "express"

const userRouter=express.Router();

userRouter.post("/createAccount",createUser)
userRouter.post("/loginuser",authUser)

export default userRouter;
