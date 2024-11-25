const Event = require("../models/eventsSchema");
const User = require("../models/userSchema");

const createEvent = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debugging line to check incoming data

    const { 
      eventName, 
      eventDate, 
      eventPlace, 
      eventLocation,
      eventDescription,
    } = req.body;


    // Validate required fields
    if (!eventName || !eventDate || !eventPlace || !eventLocation) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide all required fields: eventName, eventDate, eventLocation, and eventPlace.",
      });
    }

    // // Create a new event instance
    const newEvent = new Event({
      eventName,
      eventDate,
      eventPlace,
      eventLocation,
      eventDescription,
      creator: req.userId,

    });

    // // Save the event to the database
    await newEvent.save();

    // // Update the user's eventsCreated array
    await User.findByIdAndUpdate(
      req.userId,
      { $push: { eventsCreated: newEvent._id } },
      { new: true }
    );

    // Respond with success message
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error("Error while creating event:", error.message); // Log the error message for better clarity
    res.status(500).json({
      success: false,
      message: "Internal Server Error. Unable to create event.",
      error: error.message, // Optionally, send error message for debugging
    });
  }
};

//<---------------------------------------------------Show Events-------------------------------------------------------->

const showEvent = async (req,res)=>{
  try{
    const events = await Event.find().populate('creator').sort({eventDate: -1});
    if(!events){
      return res.status(404).json({
        success: false,
        message:"No Event Found"
      })
    }
    res.status(200).json({message:events})

  }
  catch(error){
    console.error("Error while showing events:", error.message); // Log the error message for better clarity
  }
}

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    //checinkg if  user is the creator the event
    if (event.creator.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this event"
      });
    }

    await Event.findByIdAndDelete(req.params.id);
    
    // Remove event from user's eventsCreated array
    await User.findByIdAndUpdate(req.userId, {
      $pull: { eventsCreated: req.params.id }
    });

    res.status(200).json({
      success: true,
      message: "Event deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete event"
    });
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    // Check if the user is authorized to view this event
    if (event.creator.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view this event"
      });
    }

    res.status(200).json({
      success: true,
      event
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch event"
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    // Check if the user is the creator of the event
    if (event.creator.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this event"
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent
    });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update event"
    });
  }
};

module.exports = { 
  createEvent, 
  showEvent, 
  deleteEvent, 
  getEvent, 
  updateEvent 
};
