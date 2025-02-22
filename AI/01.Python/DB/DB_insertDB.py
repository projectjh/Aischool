import sqlite3
import time

dbconn = sqlite3.connect('tel.db')
dbcursor = dbconn.cursor()

name = input("이름: ")
tel = input("전화번호: ")
addr = input("주소: ")
memo = input("메모: ")
input_time = str(time.asctime(time.localtime(time.time())))

# print(" insert into tel (name, tel, addr, input_time, memo) values ('" +name+ "', '"+tel+"', '"+addr+"', '"+input_time+ "', ' "+memo+"')")

# dbcursor.execute(" insert into tel (name, tel, addr, input_time, memo) values ('" +name+ "', '"+tel+"', '"+addr+"', '"+input_time+ "', ' "+memo+"')")
# dbcursor.execute("insert into tel (name, tel, addr, input_time, memo) values (?, ?, ?, ?, ?)", (name, tel, addr, input_time, memo))

dbcursor.execute("insert into tel (name, tel, addr, input_time, memo) values "
                 "(:name, :tel, :addr, :input_time, :memo)",
                 {"name": name, "tel": tel, "addr": addr, "input_time": input_time, "memo": memo})

dbconn.commit()         # insert문은 DML이므로 commit을 해줘야 한다.

for row in dbcursor.execute('SELECT * FROM tel'):
    print(row)

dbcursor.close()
dbconn.close()