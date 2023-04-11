const express = require("express");
const app = express();
const HOSTNAME = "localhost";
const PORT = 3000;
const { getTableRecordByID, getTable, insertTableRecord } = require("./db");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.get("/api/:table", (req, res) => {
    const table = req.params.table;
    getTable(table).then((rows) => {
        if (rows && rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(404).json({ message: "Not Found" });
        }
    });
});

app.get("/api/:table/:id", (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    getTableRecordByID(table, id).then((result) => {
        if (result && result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Not Found" });
        }
    });
});

app.post("/api/:table", (req, res) => {
    const table = req.params.table;
    const data = req.body;
    if (data) {
        insertTableRecord(table, data).then((result) => {
            if (result && result.affectedRows > 0) {
                res.status(200).json({ message: "OK", content: result });
            } else {
                res.status(400).json({ message: "Bad Request" });
            }
        });
    } else {
        res.status(400).json({ message: "Bad Request" });
    }
});

app.listen(PORT, HOSTNAME, () => {
    console.log(
        `Server running at http://${HOSTNAME === "0.0.0.0" ? "omnixen.ddns.net" : HOSTNAME}:${PORT}/`
    );
});
