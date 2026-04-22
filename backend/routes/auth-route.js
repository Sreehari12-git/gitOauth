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
    console.log(req.user);
    res.redirect(process.env.DASHBOARD);
  }
);


module.exports = router;