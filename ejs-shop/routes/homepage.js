const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.session.userid) {
        res.redirect("/shop");
    } else {
        res.redirect("/login");
    }
});

module.exports = router;
