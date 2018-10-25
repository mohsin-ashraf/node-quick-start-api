const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndexSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});



module.exports = Index = mongoose.model("Index", IndexSchema);
