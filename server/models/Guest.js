const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/eventdb", {useNewUrlParser: true});
const guestSchema = new Schema({
  guestName: { type: String, required: true },
  guestEmail: {type: String, required: false},
  guestEvents: [{type: Schema.Types.ObjectId, ref: 'Event'}],
  guestPasscode: {type: String, required: true},
  guestMenu: [{
      eventMenuId: {type: Schema.Types.ObjectId, ref: 'Menu'},
      eventId: {type: Schema.Types.ObjectId, ref: 'Event'}
    }],
  addedDate: { type: Date, default: Date.now }
});



const Guest = mongoose.model("Guest", guestSchema);

module.exports = {Guest, connection};