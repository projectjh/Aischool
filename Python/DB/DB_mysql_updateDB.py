import pymysql

dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
dbcursor = dbconn.cursor()
dbcursor.execute('SELECT * FROM tel order by id desc')
res = dbcursor.fetchall()

name = input("수정할 이름 입력: ")
flag = 0
for row in res:
    if row[1] == name:
        tel = input("전화번호: ")
        addr = input("주소: ")
        memo = input("메모: ")
        dbcursor.execute("update tel set tel=%s, addr=%s, memo=%s where name=%s", (tel, addr, memo, name))
        dbconn.commit()
        flag = 1

if flag == 0:
    print("\n수정 실패!\n")
else:
    print("\n수정 성공!\n")

dbcursor.close()
dbconn.close()
