function auth(req, res, next) {
    if (req.body.email == "admin@a" && req.body.password == "admin") {
        req.session.email = req.body.email;
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = auth;
