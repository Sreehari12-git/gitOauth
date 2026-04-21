const express = require("express");
const session = require("express-session")
const passport = require("passport");
const authRoutes = require("./routes/auth-route");
require("./config/github");
require("dotenv").config()

const app = express();
//setting the session middleware
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized:false,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Listening for port ${process.env.PORT}`);
});