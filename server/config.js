"use strict";

// server/config.js
module.exports = {
  AUTH0_DOMAIN: "sphelps.auth0.com", // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: "http://localhost:8081/api/",
  MONGO_URI:
    process.env.MONGO_URI ||
    // "mongodb://sphelps:sphelps1@ds119052.mlab.com:19052/all-about-hair",
    // "mongodb://localhost:27017/all-about-hair",
    "mongodb+srv://79sphelps:Stritone&1@cluster0.po6aaqm.mongodb.net/all-about-hair?retryWrites=true&w=majority",
  NAMESPACE: "http://myapp.com/roles" // from Auth0.com rules specification
};
