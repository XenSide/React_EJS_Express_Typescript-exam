const express = require("express");
const router = express.Router();
const auth = require("../middleware/login");

router.get("/", (req, res) => {
    res.render("signin.ejs");
});

router.post("/", auth, (req, res) => {
    res.redirect("/");
});

module.exports = router;
