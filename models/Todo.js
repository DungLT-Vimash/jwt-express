const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    value: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
    user: {
      type: ObjectId,
      require: true,
      ref: "users"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
