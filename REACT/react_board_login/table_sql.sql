select * from board_tbl;

create table member (
	id varchar(20) primary key,
    pw varchar(20) not null,
    email varchar(50) not null
);

select * from member;

SELECT count(*) AS COUNT FROM BOARD_TBL;
