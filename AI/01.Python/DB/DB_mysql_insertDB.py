import pymysql
import time

dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
dbcursor = dbconn.cursor()

name = input("이름: ")
tel = input("전화번호: ")
addr = input("주소: ")
memo = input("메모: ")
input_time = str(time.asctime(time.localtime(time.time())))

# mysql은 ?대신 %s로 작성
dbcursor.execute("insert into tel (name, tel, addr, input_time, memo) values (%s, %s, %s, %s, %s)",
                 (name, tel, addr, input_time, memo))
dbconn.commit()
dbcursor.execute('SELECT * FROM tel')
# mysql은 execute로 데이터를 가져온 다음에 반드시 fetchall로 데이터를 가져와야함!
res = dbcursor.fetchall()
for row in res:
    print(row)

dbcursor.close()
dbconn.close()