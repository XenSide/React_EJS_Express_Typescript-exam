const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const oneday = 1000 * 60 * 60 * 24;
const port = 3000;

app.use(
    session({
        secret: "IlCavalloBiancoDiNapoleone",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: oneday },
    })
);

app.use(urlencodedParser);
app.use(express.static("public"));
app.use("/login", require("./routes/login.js"));
app.use("/logout", require("./routes/logout.js"));

app.get("/", (req, res) => {
    if (req.session.email) {
        res.redirect("/execute");
    } else {
        res.redirect("/login");
    }
});

app.get("/execute", (req, res) => {
    res.render("main.ejs");
});

app.post("/execute", (req, res) => {
    console.log(req.body.code);
    res.render("main.ejs", { code: req.body.code });
});

app.post("/reset", (req, res) => {
    res.render("main.ejs", { code: undefined });
});

app.get("*", (req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
});
