// import auth from "../middlewares/auth.js"
import { createUser,authUser,getUserWithId } from "../controllers/userController.js";
import express from "express"

const userRouter=express.Router();

userRouter.post("/createAccount",createUser)
userRouter.post("/loginuser",authUser)
userRouter.get("/userWith/:userId",getUserWithId)

export default userRouter;
