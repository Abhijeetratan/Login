const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ROOT',
    database: 'employee',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});
db.query(
    "CREATE TABLE IF NOT EXISTS login ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40) NOT NULL, password VARCHAR(40) NOT NULL)",
    (err) => {
        if (err) {
            console.error("Error creating users table:", err);
        } else {
            console.log("Table is created");
        }
    },
)
app.post('./register', (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO LOGIN(name,email) VALUES(?,?)", [name, email],
        (err) => {
            if (err) {
                console.error("Error  inserting data", err);
                res.statusCode(500).send("Internal server error");
            }
            else {
                console.log("Data succesfully send");
                res.statusCode(201).send('user registered succesfully')
            }
        }
    )
})

app.listen(8081, () => {
    console.log('Server running on port 8081');
});