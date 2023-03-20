const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
  chatName: { type: string, trim: true },
  isGroupChat: { type: boolean, default: false },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestrMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Message"
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
  },

},{
    timestamps:true,
}
);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;