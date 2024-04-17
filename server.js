"use strict";

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
var compression = require('compression');

/* for HTTP/2 --> currently not able to get content from client side?? need more digging
const spdy = require('spdy')
const fs = require('fs')

const options = {
  key: fs.readFileSync(__dirname + '/server/certs/server.key'),
  cert:  fs.readFileSync(__dirname + '/server/certs/server.crt')
}
*/

// Config
const config = require("./server/config");

// MongoDB
// mongoose.connect(config.MONGO_URI);
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const monDb = mongoose.connection;

monDb.on("error", () => {
  console.log(
    `MongoDB Connection Error. Please make sure that ${
      config.MONGO_URI
    } is running.`
  );
});

monDb.once("open", () => {
  console.info(`Connected to MongoDB: ${config.MONGO_URI}.`);
});

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(cors());

// Set port
const port = process.env.PORT || "8081";
app.set("port", port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  //app.use("/", express.static(path.join("/dist/all-about-hair")));
  app.use("/", express.static(path.join(__dirname, "/dist")));
}

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

global.appRoot = path.resolve(__dirname);

// require("./server/api")(app, config);
require(path.join(appRoot, "/server/api"))(app, config);

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  app.get("/*", function(req, res) {
    //res.sendFile(path.join("/dist/all-about-hair/index.html"));
    res.sendFile(path.join(__dirname, "/dist/index.html"));
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.listen(port, () => console.log(`Server running on localhost:${port}`));

/* for HTTP/2
spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      console.log(`Listening on port: ${port}.`);
    }
  });
*/

module.exports = app;   // Important for Mocha testing!