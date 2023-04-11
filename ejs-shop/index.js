const express = require("express");
const app = express();
const oneday = 1000 * 60 * 60 * 24;
const session = require("express-session");
var FileStore = require("session-file-store")(session);
const compression = require("compression");
const path = require("path");

app.disable("x-powered-by");

app.use(compression());

app.use(
    session({
        secret: "IlCorpoNazionaleDeiVigiliDelFuocoSalviamLaVitaAgliAltriIlRestoContaPocoIlPompierePauraNonNeHa",
        saveUninitialized: true,
        cookie: { maxAge: oneday },
        resave: false,
        store: new FileStore(),
    })
);

app.use(function (req, res, next) {
    // res.setHeader("Cache-Control", `max-age=${oneday},must-revalidate`); // sets all pages to be cached for 1 day, unusable for pages that use Auth middleware
    res.setHeader("Cache-Control", `max-age=0,must-revalidate`);
    next();
});

// app.use(["/logout", "/login"], function (req, res, next) {
//     // sets logout to never be cached, would break logout functionality otherwise
//     res.setHeader("Cache-Control", "private, no-cache, no-store, must-revalidate");
//     res.setHeader("Expires", "-1");
//     res.setHeader("Pragma", "no-cache");
//     next();
// });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const homepage = require("./routes/homepage");
const login = require("./routes/login");
const signup = require("./routes/signup");
const shop = require("./routes/shop");
const logout = require("./routes/logout");

app.use("/", homepage);
app.use("/login", login);
app.use("/signup", signup);
app.use("/shop", shop);
app.use("/logout", logout);

// let port = process.env.PORT || 3000
// let hostname = process.env.HOSTNAME || 'localhost'
let port = 80;
let hostname = "0.0.0.0";
app.listen(port, hostname);
console.log(`Server running at http://${hostname === "0.0.0.0" ? "omnixen.ddns.net" : hostname}:${port}/`);
