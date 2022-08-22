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
app.post('/review', (req, res) => {
    console.log('리스트!', req.body.page_num);
    // 페이징 추가
    var page_num = parseInt(req.body.page_num);
    var page_size = parseInt(req.body.page_size);
    console.log('리스트(page_num, page_size)', page_num, ',', page_size);
    const start_limit = (page_num - 1) * page_size;
    console.log('리스트(start_limit, page_size)', start_limit, ',', page_size);
    
    const sqlQuery = "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX ORDER BY REVIEW_IDX DESC LIMIT ?,?;"
    db.query(sqlQuery, [start_limit, page_size], (err, result) => {
        res.send(result);
    });
});


    // 전체 글 개수 카운트
    app.get('/cnt', (req, res) => {
        const sqlQuery = "SELECT count(*) AS CNT FROM TB_REVIEW;"
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


    // 게시판 조회수
    app.post('/viewcnt', (req, res) => {
        console.log('조회수 확인 =>', req.body.viewCnt, req.body.viewIdx);

        const viewCnt = req.body.viewCnt;
        const viewIdx = req.body.viewIdx;

        const sqlQuery = "UPDATE TB_REVIEW SET REVIEW_CNT=? WHERE REVIEW_IDX=?;"
        db.query(sqlQuery, [viewCnt, viewIdx], (err, result) => {
            res.send("조회수 증가 성공");
        });
    });


    // 게시판 좋아요
    app.post('/viewlike', (req, res) => {
        console.log('좋아요 게시물 확인 =>', req.body.params.idx);

        var idx = req.body.params.idx;

        const sqlQuery = "SELECT L.*, R.REVIEW_IDX FROM TB_REVIEW_LIKE L, TB_REVIEW R WHERE L.REVIEW_IDX = R.REVIEW_IDX ORDER BY L.REVIEW_IDX DESC;"

        db.query(sqlQuery, [idx], (err, result) => {
            res.send(result);
        });
    });

    app.post('/likeupdate', (req, res) => {
        console.log('좋아요 업데이트 게시물 확인 =>', req.body.likeIdx);


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
