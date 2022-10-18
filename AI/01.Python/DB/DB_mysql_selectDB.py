import pymysql

dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
dbcursor = dbconn.cursor()

sql = "SELECT * FROM tel"
dbcursor.execute(sql)
rows = dbcursor.fetchall()
print(rows)

dbcursor.close()
dbconn.close()