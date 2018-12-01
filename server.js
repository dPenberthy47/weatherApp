const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const PORT = process.env.PORT || 3001;
const app = express();

// connect to the database and load models
require('./models').connect(config.dbUri);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());
}

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/weatherapp"
);



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
