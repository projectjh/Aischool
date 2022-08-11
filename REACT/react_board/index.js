// 1. 기본 세팅

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');   // ✨ 교차 출처 리소스 공유(Cross-Origin Resource Sharing)

const app = express();          // 익스프레스 서버 생성
const PORT = process.env.port || 8008;   // 환경변수 false시 8008번이 포트에 저장

app.use(express.json());    // json형식의 데이터 처리
app.use(bodyParser.urlencoded({extended: true}));   // 객체 형식의 데이터 처리

let corsOptions = {
    origin: '*',        // 출처 허용 옵션
    credential: true,   // 사용자 인증이 필요한 리소스(쿠키.. 등) 접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({       // mysql데이터 정보를 처리하기 위한 설정 
    host: 'localhost',  
    user: 'root',
    password: '123456',
    database: 'bbs',
    // port: '3306',                // port번호가 생략된 구조 => default값 3306
});


// 2.db를 연결해서 data를 가져오는 작업-1 | list |
app.get('/list', (req, res) => {
    console.log('List!!!');
    const sqlQuery = "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL;";
    db.query(sqlQuery, (err, result) => {   // sql구문이 실패시 err, 성공시 result에 결과 저장
        res.send(result);   // select문의 결과를 App.js의 getList의 then이 전달받게됨
    });
});


// 2.1. db를 연결해서 data를 가져오는 작업-2 | insert |
app.post('/insert', (req,res) => {
    console.log('/insert', req.body);
    var writer = req.body.writer;
    var title = req.body.title
    var content = req.body.content;

    const sqlQuery = "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?);";    // value물음표 => 입력받은 값을 사용하겠다.
    db.query(sqlQuery, [writer, title, content], (err, result) => { // []안의 내용을 물음표에 사용하겠다.
        res.send(result);   // insert는 별도로 반환되는 값이 없어 null값
    });
});


// 2.2. db를 연결해서 data를 가져오는 작업-3 | detail |
app.post('/detail', (req, res) => {
    console.log('/detail', req.body);
    var num = parseInt(req.body.num);   // 가져온 글 번호가 num에 저장

    const sqlQuery = "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL WHERE BOARD_NUM=?;";
    db.query(sqlQuery, [num], (err, result) => {
        res.send(result);
    });
});


// 2.3. db를 연결해서 data를 가져오는 작업-4 | update |
app.post('/update', (req, res) => {
    console.log('/update', req.body);
    var title = req.body.article.board_title;
    var content = req.body.article.board_content;
    var num = req.body.article.board_num;

    const sqlQuery = "UPDATE BOARD_TBL SET BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=NOW() WHERE BOARD_NUM=?;";
    db.query(sqlQuery, [title, content, num], (err, result) => {    // 쿼리문 순서에 맞춰 파라미터 값 전달
        res.send(result);   // result값에 아무것도 없기 때문에 실제로는 안보내도 됨
        console.log('result =', result);
    });
});


// 2.4. db를 연결해서 data를 가져오는 작업-5 | delete |
app.post('/delete', (req, res) => {
    const num = req.body.num;
    console.log('/delete(id) =>', num);

    const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM=?;";
    db.query(sqlQuery, [num], (err, result) => {
        console.log(err);
        res.send(result);
    });
});


 // app.listen의 위치는 중간에 있어도 상관없음
app.listen(PORT, () => {   
    console.log(`running on port ${PORT}`);
});