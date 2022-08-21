const express = require('express');
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');

const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const mime = require('mime-types');
const {v4:uuid} = require('uuid');

const app = express();
const PORT = process.env.port || 8008;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

let corsOptions = {
    origin: '*',
    credential: true,
};

app.use(cors(corsOptions));

const db = mysql.createPool({
    host: '210.114.22.116',
    user: 'js_team_5',
    password: 'tb123456',
    database: 'js_team_5',
});

//===========================
// REVIEW LIST
//===========================
app.get('/review', (req, res) => {
    console.log('리스트!', req.body.reviewList);
    
    const sqlQuery = "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX ORDER BY REVIEW_IDX DESC;"
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});


//===========================
// REVIEW VIEW
//===========================
app.post('/review/view', (req, res) => {
    console.log('뷰어!!', req.body.params);
    
    var idx = req.body.params.idx;

    const sqlQuery = "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX && REVIEW_IDX=?;"
    db.query(sqlQuery, [idx], (err, result) => {
        res.send(result);
    });
});


//===========================
// REVIEW WRITE
//===========================
app.post('/review/write', (req, res) => {
    // console.log('글쓰기', req.body);
    console.log('글쓰기', req.body.idx);
    
    var title = req.body.title;
    var content = req.body.content;
    var user_idx = req.body.user;

    const sqlQuery = "INSERT INTO TB_REVIEW (REVIEW_TITLE, REVIEW_TXT, USER_IDX) values (?,?,?);";
    db.query(sqlQuery, [title, content, user_idx], (err, result) => {
        res.send(result);
    });
});

// ** CKeditor
// dbConnect();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
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

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


//===========================
// REVIEW MODIFY
//===========================
app.post('/review/modify', (req, res) => {
    console.log('수정!!!', req.body.modify);

    var idx = req.body.modify.review_idx;
    var title = req.body.modify.review_title;
    var content = req.body.content;

    const sqlQuery = "UPDATE TB_REVIEW SET REVIEW_TITLE=?, REVIEW_TXT=? WHERE REVIEW_IDX=?;";
    db.query(sqlQuery, [title, content, idx], (err, result) => {
        res.send("업데이트성공");
    });
});


//===========================
// REVIEW DELETE
//===========================
app.post('/delete', (req, res) => {
    console.log('삭제!!!', req.body.idx);
    var idx = req.body.idx;

    const sqlQuery = "DELETE FROM TB_REVIEW WHERE REVIEW_IDX=?;"
    db.query(sqlQuery, [idx], (err, result) => {
        res.send(result);
    });
    
});






app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
