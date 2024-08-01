import eventModel from "../models/eventModel.js"
import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary"
// const createEvent = async (req, res) => {
//   try {
//       const { name, organiser, category, startDate, endDate, startTime, endTime, description, location, contactInformation } = req.body;
//       const banner = req.file.path; // Ensure req.file is defined
//       const bannerUpload = await cloudinary.uploader.upload(banner, (error, result) => {
//           if (error) {
//               console.error(error);
//               return res.status(500).json({ success: false, message: 'Error uploading image to Cloudinary' });
//           }
//           res.json({ success: true, imageUrl: result.url });
//       });
//       console.log(name, organiser, description, bannerUpload, category);
//   } catch (error) {
//       console.error("Error in createEvent:", error); // More detailed logging
//       res.status(500).json({ success: false, message: 'Error creating event' });
//   }
// }

const createEvent = async (req, res) => {
  try {
    const { name, organiser, category, startDate, endDate, startTime, endTime, description, location, contactInformation, eventType, ticketName, ticketPrice } = req.body;
    const bannerBuffer = req.file.buffer; // Get the file buffer

    // Create a stream to upload the buffer
    const stream = cloudinary.uploader.upload_stream({ resource_type: 'auto' }, async (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error uploading image to Cloudinary' });
      }
      const user = await userModel.findById(req.user._id);
      if (!user) {
        return res.status(404).send("User not found");
      }
       // Get the current count of events to assign a new ID
       const eventCount = await eventModel.countDocuments();
       const newEventId = eventCount;
      // Save the event with the image URL
      const newEvent = new eventModel({
        id: newEventId, 
        creator: user._id,
        name,
        organiser,
        category,
        startDate,
        endDate,
        startTime,
        endTime,
        description,
        location,
        contactInformation,
        banner: result.secure_url,// Store the Cloudinary URL
        attendee:null,
        eventType,
        ticketName,
        ticketPrice,
      });
      await newEvent.save();
      user['event'] = newEvent._id;
      await user.save();
      res.json({ success: true, imageUrl: result.secure_url });
    });

    stream.end(bannerBuffer); // End the stream with the buffer

  } catch (error) {
    console.error("Error in createEvent:", error);
    res.status(500).json({ success: false, message: 'Error creating event' });
  }
}

const listEvents = async (req, res) => {
  try {
    const events = await eventModel.find({});
    res.json({
      success: true,
      eventlists: events,
    });
  } catch (error) {
    res.json({
      success: false
    })
  }
}

const addAttendeeData = async(req,res)=>{
  try {
    const user = await userModel.findById(req.user._id);
      if (!user) {
        return res.status(404).send("User not found");
      }
    const event = await eventModel.findOne({creator:user._id});
    console.log(event);
    console.log(req.body);
  } catch (error) {
    console.error("Error in addAttendeeData:", error); // Log any errors
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

}
export { createEvent, listEvents,addAttendeeData }