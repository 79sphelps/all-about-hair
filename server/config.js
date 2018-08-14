// server/config.js
module.exports = {
  AUTH0_DOMAIN: "sphelps.auth0.com", // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: "http://localhost:8081/api/", // e.g., 'http://localhost:8083/api/'
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://sphelps:sphelps1@ds119052.mlab.com:19052/all-about-hair",
  NAMESPACE: "http://myapp.com/roles" // from Auth0.com rules specification
};
