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

export { createUser, authUser };
