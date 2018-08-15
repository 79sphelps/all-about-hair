// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

/*
const Contact = require("./models/Contact");
const Footer = require("./models/Footer");
const HairColoring = require("./models/Hair_Coloring");
const HairExtensionsAndSmoothing = require("./models/Hair_Extensions_and_Smoothing");
const HaircutAndStyle = require("./models/Haircut_and_Style");
const Homepage = require("./models/Homepage");
const Images = require("./models/Images");
const LashExtensions = require("./models/Lash_Extensions");
const Personel = require("./models/Personel");
const Request = require("./models/Request");
const Services = require("./models/Services");
const SpecialOccasionsAndTreatments = require("./models/Special_Occasions_and_Treatments");
const Testimonials = require("./models/Testimonials");
const Waxing = require("./models/Waxing");
*/

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */
module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5, // was 5
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: "RS256"
  });

  // Check for an authenticated admin user
  const adminCheck = (req, res, next) => {
    const roles = req.user[config.NAMESPACE] || [];
    if (roles.indexOf("admin") > -1) {
      next();
    } else {
      res.status(401).send({ message: "Not authorized for admin access" });
    }
  };


  // GET API root
  app.get("/api/", (req, res) => {
    res.send("API Works");
  });

  require(appRoot + "/server/routes/contact.router")(app, jwtCheck, adminCheck);
  require(appRoot + "/server/routes/gallery.router")(app, jwtCheck, adminCheck);
  require(appRoot + "/server/routes/homepage.router")(app, jwtCheck, adminCheck);
  require(appRoot + "/server/routes/personel.router")(app, jwtCheck, adminCheck);
  require(appRoot + "/server/routes/services.router")(app, jwtCheck, adminCheck);

  /*
  require("./routes/contact.router")(app, jwtCheck, adminCheck);
  require("./routes/gallery.router")(app, jwtCheck, adminCheck);
  require("./routes/homepage.router")(app, jwtCheck, adminCheck);
  require("./routes/personel.router")(app, jwtCheck, adminCheck);
  require("./routes/services.router")(app, jwtCheck, adminCheck);
  */
  
 
  //require("./routes/homepage.router")(app)


  //const ctrlHomepage = require("../controllers/homepage.controller");
  //app.get('/homepage', jwtCheck, adminCheck, ctrlHomepage.getHomepage);

  /*
  const _homepageProjection = "headline headlineSubMsg";
  //const _homepageProjection = 'aboutQuote';

  app.get("/api/homepage", function(req, res, next) {
    Homepage.find({}, (err, homepageDetails) => {
      let homepageArr = [];
      if (err) {
        return res.status(500).send({ message: err.message });
      }

      console.log(homepageDetails);

      if (homepageDetails) {
        homepageDetails.forEach(homepageDetail => {
          homepageArr.push(homepageDetail);
        });
      }

      res.send(homepageArr[0]);
    });
  });
  */

};
