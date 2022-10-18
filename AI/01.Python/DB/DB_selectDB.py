import sqlite3

dbconn = sqlite3.connect('tel.db')
dbcursor = dbconn.cursor()

dbcursor.execute('SELECT * FROM tel order by id asc')
res = dbcursor.fetchall()       # fetchall() => 한 행씩 튜플형식으로 만들어서 저장
print(res)

print("No \t 성명    \t 전화번호 \t 주소 \t 메모 \t       입력일자")
print("======================================================================")
for row in res:
    # dbcursor.execute('SELECT * FROM tel order by id asc')
# for row in dbcursor:
    print(str(row[0])+"\t"+row[1]+"\t"+row[2]+"\t"+row[3]+"\t\t"+row[5]+" \t"+row[4])
    print("----------------------------------------------------------------------")

dbcursor.execute('SELECT * FROM tel order by id asc')
res = dbcursor.fetchone()   # 첫번째 fetchone()은 튜플에서 첫번째 값을 불러옴
print(res)

res2 = dbcursor.fetchone()  # 두번째 fetchone() 실행시 튜플에서 두번째 값을 불러옴
print(res2)

dbcursor.close()
dbconn.close()
