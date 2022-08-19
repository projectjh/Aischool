const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const mime = require('mime-types');
const {v4:uuid} = require('uuid');
const fs = require('fs');

const app = express();
const PORT = process.env.port || 8008;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

let corsOptions = {
    origin: '*',
    credential: true,
};
app.use(cors(corsOptions));

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'bbs',
// });
const db = mysql.createPool({
    host: '210.114.22.116',
    user: 'js_team_5',
    password: 'tb123456',
    database: 'js_team_5',
});


// 0. list
app.get('/list', (req, res) => {
    console.log('리스트!');

    // const sqlQuery = "SELECT * FROM TB_REVIEW ORDER BY REVIEW_IDX DESC;"
    // const sqlQuery = "SELECT REVIEW_IDX, REVIEW_TITLE, REVIEW_TXT, REVIEW_DATE, U.USER_IDX, REVIEW_LIKE, REVIEW_CNT, REVIEW_FILE, REVIEW_THUM FROM TB_REVIEW R INNER JOIN TB_USER U ON R.USER_IDX = U.USER_IDX BY REVIEW_IDX DESC;"
    const sqlQuery = "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX ORDER BY REVIEW_IDX DESC;"
    db.query(sqlQuery, (err, result) => {
        // if(result )
        res.send(result);
    });
});


// 1. view ------------------------------------------------------------------------
app.post('/view', (req, res) => {
    // console.log("ck------", req.body)
    console.log('뷰어!!', req.body.idx);
    

    var idx = parseInt(req.body.idx);

    // const sqlQuery = "SELECT * FROM TB_REVIEW WHERE REVIEW_IDX=?;"
    const sqlQuery = "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX && REVIEW_IDX=?;"
    db.query(sqlQuery, [idx], (err, result) => {
        res.send(result);
    });
});


// 2. write ------------------------------------------------------------------------
app.post('/write', (req, res) => {
    // console.log('글쓰기', req.body);
    // console.log('글쓰기', req.body.idx);
    
    var title = req.body.title;
    var content = req.body.content;
    // var user_idx = window.sessionStorage.getItem('USER_IDX');
    var user_idx = req.body.user;

    const sqlQuery = "INSERT INTO TB_REVIEW (REVIEW_TITLE, REVIEW_TXT, USER_IDX) values (?,?,?);";
    // const sqlQuery = "INSERT INTO TB_REVIEW REVIEW_TITLE, REVIEW_TXT, R.USER_IDX SELECT REVIEW_TITLE, REVIEW_TXT, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX values (?,?,?);";
    db.query(sqlQuery, [title, content, user_idx], (err, result) => {
        res.send(result);
    });
});

// ** CKeditor
// dbConnect();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}.${mime.extension(file.mimetype)}`);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype))
            cb(null, true);
        else
            cb(new Error("해당 파일 형식을 지원하지 않습니다."), false);
    },
    limits: {
        fileSize: 1024 * 1024 * 10
    }
});


app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log("여기냐?")
    console.log('file', req.file);
    res.status(200).json(req.file);
});

app.use("/images", express.static(path.join(__dirname, "/images")));


// 3. Modify ------------------------------------------------------------------------
app.post('/modify', (req, res) => {
    console.log('수정!!!', req.body.content);

    var idx = req.body.article.review_idx;
    var title = req.body.article.title;
    var content = req.body.content;
    // var user_idx = 1;

    const sqlQuery = "UPDATE TB_REVIEW SET REVIEW_TITLE=?, REVIEW_TXT=? WHERE REVIEW_IDX=?;";
    db.query(sqlQuery, [title, content, idx], (err, result) => {
        res.send("업데이트성공");
    });
});




app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
