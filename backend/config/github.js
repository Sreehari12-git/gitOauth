const passport = require("passport")
const GitHubStrategy = require("passport-github2").Strategy
require("dotenv").config()

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK
},
//Anonymous callback function
  function (accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));

//Store user in session
passport.serializeUser((user,done) => {
    done(null, user);
});

//get user from session
passport.deserializeUser((user,done) => {
    done(null,user)
})