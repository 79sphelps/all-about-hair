"use strict";

const mongoose = require("mongoose");
const FooterAboutMsgSchema = mongoose.Schema({
  aboutMsg: {
    type: String,
    required: true
  }
});

// const FooterAboutMsg = mongoose.model("FooterAboutMsg", FooterAboutMsgSchema);
const FooterAboutMsg = mongoose.model("footerAbout3", FooterAboutMsgSchema);
module.exports = FooterAboutMsg;
