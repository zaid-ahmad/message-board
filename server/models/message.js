const mongoose = require("mongoose")

const Schema = mongoose.Schema

const messageSchema = new Schema({
  text: { type: String },
  user: { type: String, maxLength: 100 },
  added: { type: Date },
})

module.exports = mongoose.model("Message", messageSchema)
