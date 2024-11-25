const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./userSchema')

// Event Schema
const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventPlace: {
    type: String,
    required: true,
    minlength: 3,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
    minlength: 10,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Event Model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

