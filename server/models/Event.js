const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/eventdb", {useNewUrlParser: true});
const eventSchema = new Schema({
  eventImage: {type: String, default: 'https://images.unsplash.com/photo-1523372102243-c9426fc31b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'},
  eventName: { type: String, required: true },
  eventHost: {type: String, required: true},
  eventLocation: {type: String, required: true},
  eventParticipants: [{
    type: Schema.Types.ObjectId, ref: 'Guest'
  }],
  eventMenu: [{type: Schema.Types.ObjectId, ref: 'Menu'}],
  addedDate: { type: Date, default: Date.now }
});



const Event = mongoose.model("Event", eventSchema);

module.exports = {Event, connection};
