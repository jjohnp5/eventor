const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/eventdb", {useNewUrlParser: true});
const menuSchema = new Schema({
  menuName: { type: String, required: true },
  addedDate: { type: Date, default: Date.now }
});



const Menu = mongoose.model("Menu", menuSchema);

module.exports = {Menu, connection};