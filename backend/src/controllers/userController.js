import eventModel from "../models/eventModel.js";
import userModel from "../models/userModel.js";

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new userModel({
      username,
      email: email,
      password,
      event: null,
    });
    await user.save();
    console.log("User created:", user); // Log the created user
    const token = user.generateAccessToken();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ success: false, error: error.message });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
 
  try {
    const user = await userModel.findOne({ email: email }); 
    if (!user) return res.status(400).json({ error: "Invalid email" });

    const isMatch = await user.isPasswordCorrect(password);
    console.log("password",isMatch);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    const token = user.generateAccessToken();
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error); // Log the error
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const getUserWithId = async (req, res) => {
  // console.log("backend url entered");
  const userId = req.params.userId;
  try {
      const user = await userModel.findById(userId); 
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      const event = await eventModel.find({creator:userId})
      // console.log("event",event);
      res.json({success:true,userEvent:event})
      // res.status(200).json(user);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
};

const editEvent = async (req, res) => {
  console.log("backend url entered");
  // const userId = req.params.userId;
  // try {
  //     const user = await userModel.findById(userId); 
  //     if (!user) {
  //         return res.status(404).json({ message: "User not found" });
  //     }
  //     const event = await eventModel.findOne({creator:userId})
  //     console.log("event",event);
  //     res.json({success:true,userEvent:event})
  //     // res.status(200).json(user);
  // } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Server error" });
  // }
};

const deleteEvent = async (req, res) => {
  console.log("backend url entered");
  const eventId = req.params.userId;
  // console.log("eventid = ",eventId);
  
  try {
      const event = await eventModel.findById(eventId); 
      if (!event) {
          return res.status(404).json({ message: "Event not found" });
      }
      await event.deleteOne();
      res.json({success:true,userEvent:event})
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
};


export { createUser, authUser ,getUserWithId , deleteEvent,editEvent};
