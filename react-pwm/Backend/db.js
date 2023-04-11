const { createPool } = require("mysql2/promise");

//create the connection to database
const pool = createPool({
    host: "localhost",
    user: "OmniXen",
    database: "eshop",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
});

async function getTable(table) {
    try {
        const [rows] = await pool.query(`SELECT * FROM ${table}`);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function getTableRecordByID(table, id) {
    try {
        const [rows] = await pool.query(`SELECT * FROM ${table} WHERE id = ?`, [id]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function insertTableRecord(table, data) {
    try {
        const [rows] = await pool.query(`INSERT INTO ${table} SET ?`, [data]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getTableRecordByID, getTable, insertTableRecord };
