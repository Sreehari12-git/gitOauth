const { Router } = require("express");
const passport = require("passport");
require("dotenv").config()
const router = Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/callback",
  passport.authenticate("github"),
  (req, res) => {
    res.redirect(process.env.DASHBOARD);
  }
);

router.get("/user",(req,res) => {
  if(req.isAuthenticated()) {
    return res.json({loggedIn : true, user: req.user});
  }
  res.json({loggedIn: false});
})

router.get("/logout", (req,res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.redirect(process.env.FRONTEND_URL)
    })
  })
})

module.exports = router;