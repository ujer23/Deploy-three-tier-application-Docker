const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: '12345',
    database: 'mydb'
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Backend running on port 3000');
});
