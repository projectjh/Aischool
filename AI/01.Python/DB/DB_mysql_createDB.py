# mysql 연결을 위한 설치 : pip install pymysql

import pymysql

dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
dbcursor = dbconn.cursor()
dbcursor.execute("""create table if not exists tel(
                    id int primary key auto_increment,
                    name varchar(10),
                    tel varchar(20),
                    addr varchar(4),
                    input_time varchar(30),
                    memo varchar(50))""")

dbcursor.close()
dbconn.close()