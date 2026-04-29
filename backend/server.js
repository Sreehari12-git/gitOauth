const express = require("express");
const session = require("express-session")
const passport = require("passport");
const authRoutes = require("./routes/auth-route");
const cors = require("cors")
require("./config/github");
require("dotenv").config()

const app = express();

app.use(cors({
  origin: process.env.ORIGIN,
  credentials:true
}))

//setting the session middleware
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:false,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening for port ${process.env.PORT}`);
});