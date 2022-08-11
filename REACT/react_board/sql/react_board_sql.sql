CREATE TABLE board_tbl (
	BOARD_NUM INT NOT NULL AUTO_INCREMENT,	-- 글번호 저장 / 정수형 / NOT NULL / 자동으로 1씩 증가
    BOARD_WRITER VARCHAR(20),
    BOARD_TITLE VARCHAR(30),
    BOARD_CONTENT VARCHAR(500),
    BOARD_DATE DATETIME DEFAULT CURRENT_TIMESTAMP,	-- 값이 없을 경우 현재 시스템의 시간을 저장하겠다는 의미 => 밀리세컨드 값으로 주어짐
    PRIMARY KEY (BOARD_NUM)	-- 기본키로 BOARD_NUM설정
);

DESC board_tbl;
SELECT * FROM board_tbl;