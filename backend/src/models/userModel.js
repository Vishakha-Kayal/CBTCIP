import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true, lowercase: true },
    email: { type: String, required: true, lowercase: true },
    password: {
      type: String,
      required: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  },
  { timestamps: true }
);

//middleware access
userSchema.pre("save",async function(next){
    console.log("Pre-save hook triggered"); 
    if(!this.isModified("password")) return next();
    const salt = await bcryptjs.genSalt(7);
    this.password =await bcryptjs.hash(this.password,salt);
    next();
})
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    }, //payload variables and values are coming from database
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h",
    }
  );
};

const userModel = mongoose.model("user", userSchema);
export default userModel;
