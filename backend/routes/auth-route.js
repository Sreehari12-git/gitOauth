const { Router } = require("express");
const passport = require("passport");

const router = Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    console.log(req.user);
    res.redirect("http://localhost:5173/dashboard");
  }
);


module.exports = router;