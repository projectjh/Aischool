import sqlite3

dbconn = sqlite3.connect('sungjuk.db')
dbcursor = dbconn.cursor()

dbcursor.execute("""create table if not exists sungjuk(
                    id integer primary key autoincrement,
                    hakbun text,
                    irum text,
                    kor integer,
                    eng integer,
                    math integer,
                    tot integer,
                    avg real,
                    grade text)""")

dbcursor.close()
dbconn.close()