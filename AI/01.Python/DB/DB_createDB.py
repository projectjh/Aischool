import sqlite3

dbconn = sqlite3.connect('tel.db')      # 해당 db이름의 파일이 없을 경우 파일 새로 생성하여 연결
dbcursor = dbconn.cursor()              # cursor()함수를 통해 cursor타입의 객체를 만들어줌 => sql함수를 사용하기 위해 필요
# sql구문을 사용하기위해 execute함수 사용
dbcursor.execute("""create table if not exists tel(
                    id integer primary key autoincrement,
                    name text,
                    tel text,
                    addr text,
                    input_time text,
                    memo text)""")

dbcursor.close()
dbconn.close()