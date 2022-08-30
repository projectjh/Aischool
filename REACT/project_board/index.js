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

app.get("/review", (req, res) => {
  const sqlQuery =
    "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX ORDER BY REVIEW_IDX DESC;";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 전체 글 가져가기
app.post("/review/orderBy/all", (req, res) => {
  const order = req.body.order;
  const sqlQuery = `SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX ORDER BY ${order} DESC;`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});




//===========================
// REVIEW SEARCH
//===========================
app.post("/review/search", (req, res) => {
  // console.log('검색어 option 확인!!', req.body.optionValue);
  // console.log('검색어 search 확인!!', req.body.searchValue);
  var searchData = req.body.searchData;
  var optionData = req.body.optionData;

  var sqlQuery = `SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX =  U.USER_IDX && CONCAT(${optionData}) REGEXP ? ORDER BY R.REVIEW_IDX DESC;`;

  db.query(sqlQuery, [searchData], (err, result) => {
    res.send(result);
  });
});

// REVIEW SEARCH ORDERBY----------------------------------------------
app.post("/review/orderBy/search", (req, res) => {
  // console.log('검색어 option 확인!!', req.body.optionValue);
  // console.log('검색어 search 확인!!', req.body.searchValue);
  var order = req.body.order;
  var searchData = req.body.searchData;
  var optionData = req.body.optionData;

  var sqlQuery = `SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX =  U.USER_IDX && CONCAT(${optionData}) REGEXP ? ORDER BY R.${order} DESC;`;

  db.query(sqlQuery, [searchData], (err, result) => {
    res.send(result);
  });
});



//===========================
// REVIEW VIEW
//===========================
app.post('/review/view', (req, res) => {
    console.log('뷰어!!', req.body.params);
    
    var idx = req.body.params.idx;
    // var user = req.body.sessionIdx;

    const sqlQuery = "SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX && REVIEW_IDX=?;"
    // const sqlQuery = "SELECT R.*, U.USER_NICK, L.LIKE_OX FROM TB_REVIEW R, TB_USER U, TB_REVIEW_LIKE L WHERE R.USER_IDX = U.USER_IDX = L.USER_IDX && R.REVIEW_IDX=? && L.USER_IDX=?";
    db.query(sqlQuery, [idx], (err, result) => {
        res.send(result);
    });
    
});


    // 게시판 조회수
    app.post('/view/cnt', (req, res) => {
        console.log('조회수 확인 =>', req.body.viewCnt, req.body.viewIdx);

        const viewCnt = req.body.viewCnt;
        const viewIdx = req.body.viewIdx;

        const sqlQuery = "UPDATE TB_REVIEW SET REVIEW_CNT=? WHERE REVIEW_IDX=?;"
        db.query(sqlQuery, [viewCnt, viewIdx], (err, result) => {
            res.send("조회수 증가 성공");
        });
    });


    // 게시판 좋아요
    app.post('/view/like', (req, res) => {
        console.log('좋아요 게시물 확인 =>', req.body.params.idx);

        var idx = req.body.params.idx;
        var user = req.body.sessionIdx;

        // const sqlQuery = "SELECT * FROM TB_REVIEW_LIKE WHERE REVIEW_IDX=? && USER_IDX=?;"
        const sqlQuery = "SELECT R.*, U.USER_NICK, L.LIKE_OX FROM TB_REVIEW R, TB_USER U, TB_REVIEW_LIKE L WHERE R.USER_IDX = U.USER_IDX && R.REVIEW_IDX = L.REVIEW_IDX && R.REVIEW_IDX=? && L.USER_IDX=?;";

        db.query(sqlQuery, [idx ,user], (err, result) => {
            res.send(result);
        });
    });

    // 좋아요 테이블에 데이터 추가
    app.post('/view/like/insert', (req, res) => {
        console.log('좋아요 INSERT 게시물 확인 =>', req.body.params.idx);

        var idx = req.body.params.idx;
        var user = req.body.sessionIdx;
        var likeOX = req.body.likeOX;

        const sqlQuery = "INSERT INTO TB_REVIEW_LIKE (REVIEW_IDX, USER_IDX, LIKE_OX) values (?,?,?);";

        db.query(sqlQuery, [idx, user, likeOX], (err, result) => {
            res.send("좋아요 증가 성공");
            // const sqlQuery = "SELECT * FROM TB_REVIEW_LIKE WHERE REVIEW_IDX=? && USER_IDX=?;"
            // db.query(sqlQuery, [idx, user], (err, result) => {
            //     res.send(result);
            // });
        });
    });

    // 좋아요 값 비교하여 하트 토글
    app.post('/view/like/update', (req, res) => {
        console.log('좋아요 UPDATE 게시물 확인 =>', req.body.likeOX);
        
        var likeOX = req.body.likeOX;
        var idx = req.body.params.idx;
        var user = req.body.sessionIdx;
        // var ck1 = req.body.ck1;
        // var ck2 = req.body.ck1;

        const updateQuery = "UPDATE TB_REVIEW_LIKE SET LIKE_OX=? WHERE REVIEW_IDX=? && USER_IDX=?;";
        // const sqlQuery = "UPDATE TB_REVIEW_LIKE SET LIKE_OX = CASE ? = 'O' THEN LIKE_OX = 'X' ELSE LIKE_OX = 'O' END WHERE REVIEW_IDX=? && USER_IDX=?;"

        db.query(updateQuery, [likeOX,idx, user], (err, result) => {
            res.send("좋아요 업데이트 성공");

            // const sqlQuery = "SELECT * FROM TB_REVIEW_LIKE WHERE REVIEW_IDX=? && USER_IDX=?;"
            // db.query(sqlQuery, [idx, user], (err, result) => {
            //     res.send(result);
            // });
        });
    });

    // 좋아요 카운트
    app.post("/view/like/cnt", (req, res) => {
        console.log('좋아요 COUNT 게시물 확인 =>', req.body.params);

        // var likeOX = req.body.likeOX;
        var idx = req.body.params.idx;

        const sqlQuery = "UPDATE TB_REVIEW SET REVIEW_LIKE=(SELECT COUNT(*) AS CNT FROM TB_REVIEW_LIKE WHERE REVIEW_IDX=? && LIKE_OX='O') WHERE REVIEW_IDX=?;";
        db.query(sqlQuery, [idx,idx], (err, result) => {
            res.send("좋아요 카운트 성공");
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
    console.log('삭제!!!', req.body.params.idx);
    var idx = req.body.params.idx;

    const sqlQuery = "DELETE FROM TB_REVIEW WHERE REVIEW_IDX=?;"
    db.query(sqlQuery, [idx], (err, result) => {
        res.send("삭제완!!!");
    });
    
});




//===========================
// REVIEW COMMENT
//===========================
app.post('/review/comment', (req, res) => {
    var idx = req.body.params.idx;

    const sqlQuery = "SELECT C.*, R.REVIEW_IDX, U.USER_NICK FROM TB_COMMENT C, TB_REVIEW R, TB_USER U WHERE C.REVIEW_IDX = R.REVIEW_IDX && C.USER_IDX = U.USER_IDX && C.REVIEW_IDX=?;";
    db.query(sqlQuery, [idx], (err, result) => {
        res.send(result);
    });
});

app.post('/review/comment/insert', (req, res) => {
    // console.log('가져온 댓글 확인', req.body);

    var idx = req.body.params.idx;
    var comment = req.body.comment;
    var user = req.body.user;

    const sqlQuery = "INSERT INTO TB_COMMENT (REVIEW_IDX, COMMENT_TXT, USER_IDX) VALUES (?,?,?);";
    db.query(sqlQuery, [idx, comment, user], (err, result) => {
        res.send(result);
    });
});

app.post('/review/comment/delete', (req, res) => {
    console.log('댓글 삭제 idx,', req.body.comment_idx);

    var review_idx = req.body.params.idx;
    var comment_idx = req.body.comment_idx;
    var user = req.body.user;

    const sqlQuery = "DELETE FROM TB_COMMENT WHERE REVIEW_IDX=? && COMMENT_IDX=? && USER_IDX=?";
    db.query(sqlQuery, [review_idx, comment_idx, user], (err, result) => {
        res.send("댓글 삭제 완");
    })
});


app.post('/review/comment/cnt', (req, res) => {
    var idx = req.body.params.idx;

    //UPDATE TB_REVIEW SET REVIEW_LIKE=(SELECT COUNT(*) AS CNT FROM TB_REVIEW_LIKE WHERE REVIEW_IDX=? && LIKE_OX='O') WHERE REVIEW_IDX=?;
    const sqlQuery = "UPDATE TB_REVIEW SET COMMENT_CNT=(SELECT COUNT(*) AS CNT FROM TB_COMMENT WHERE REVIEW_IDX=?) WHERE REVIEW_IDX=?;";
    db.query(sqlQuery, [idx, idx], (err, result) => {
        res.send(result);
    })
});


app.post("/review/comment/update", (req, res) => {
    var comment = req.body.comment;
    var commentIdx = req.body.commentIdx;

    // "UPDATE TB_REVIEW SET REVIEW_TITLE=?, REVIEW_TXT=? WHERE REVIEW_IDX=?;"
    const sqlQuery = "UPDATE TB_COMMENT SET COMMENT_TXT=? WHERE COMMENT_IDX=?;";
    db.query(sqlQuery, [comment, commentIdx], (err, result) => {
        res.send("댓글 수정 완");
    })
});



// // 게시물 댓글 개수 요청
// app.post('/review/datacnt', (req, res) => {
//     var idx = req.body.params.idx;

//     const sqlQuery = "SELECT COUNT(*) AS COMMENT_CNT FROM TB_COMMENT WHERE REVIEW_IDX=?";
//     db.query(sqlQuery, [idx, idx], (err, result) => {
//         res.send(result);
//     })

// });



// SELECT R.*, U.USER_NICK FROM TB_REVIEW R, TB_USER U WHERE R.USER_IDX = U.USER_IDX
// 좋아요 보관함
app.post("/storage/like", (req, res) => {
    var user = req.body.sessionIdx;

    const sqlQuery = "SELECT R.*, L.REVIEW_IDX, U.USER_NICK FROM TB_REVIEW R, TB_REVIEW_LIKE L, TB_USER U WHERE R.REVIEW_IDX=L.REVIEW_IDX && R.USER_IDX=U.USER_IDX && L.LIKE_OX='O' && L.USER_IDX=? ORDER BY L.REVIEW_IDX DESC;";
    db.query(sqlQuery, [user], (err, result) => {
        res.send(result)
    })

});

// 후기 보관함
app.post("/storage/review", (req, res) => {
    var user = req.body.sessionIdx;

    const sqlQuery = "SELECT * FROM TB_REVIEW WHERE USER_IDX=? ORDER BY REVIEW_IDX DESC;";
    db.query(sqlQuery, [user], (err, result) => {
        res.send(result)
    })

});
app.post("/storage/review/orderBy", (req, res) => {
    
    var user = req.body.sessionIdx;
    const order = req.body.order;
    
    const sqlQuery = `SELECT * FROM TB_REVIEW WHERE USER_IDX=? ORDER BY ${order} DESC, REVIEW_IDX DESC;`;
    db.query(sqlQuery, [user], (err, result) => {
        res.send(result);
    });
})


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
