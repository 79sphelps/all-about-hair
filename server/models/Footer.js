const mongoose = require("mongoose");
const FooterAboutMsgSchema = mongoose.Schema({
  aboutMsg: {
    type: String,
    required: true
  }
});

const FooterAboutMsg = mongoose.model("FooterAboutMsg", FooterAboutMsgSchema);
module.exports = FooterAboutMsg;
