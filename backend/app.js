const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your password here',
    database: 'CourseSearch'
});

db.connect();

app.get('/data', function (req, res) {
    var sql = 'SELECT * FROM Students';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/data', function (req, res) {
    console.log(req.body);
    var data = [req.body.StudentName, req.body.CourseDept, req.body.CourseNum];
    var sql = 'INSERT INTO Students VALUES (?, ?, ?)';
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    res.send({
        status: 'The data has successfully been inputted!',
        no: null,
        StudentName: req.body.StudentName,
        CourseDept: req.body.CourseDept,
        CourseNum: req.body.CourseNum
    });
});

app.listen(3210, () => {
    console.log('Server running on port 3210')
});