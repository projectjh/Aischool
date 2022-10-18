import sqlite3
from sungjuk_1_class_3 import *

dbconn = sqlite3.connect('sungjuk.db')
dbcursor = dbconn.cursor()

lst = []

while True:
    menu()

    try:
        num = int(input("\n메뉴를 선택하세요: "))
    except:
        print("\n메뉴는 숫자만 입력해주세요\n")
        continue

    if num == 1:
       record(lst)
       for sungjuk in lst:
           hakbun = sungjuk.hakbun
           irum = sungjuk.irum
           kor = sungjuk.kor
           eng = sungjuk.eng
           math = sungjuk.math
           tot = sungjuk.tot
           avg = sungjuk.avg
           grade = sungjuk.grade

       dbcursor.execute("insert into sungjuk (hakbun, irum, kor, eng, math, tot, avg, grade) values (?,?,?,?,?,?,?,?)",
                        (hakbun, irum, kor, eng, math, tot, avg, grade))
       dbconn.commit()
    elif num == 2:
        dbcursor.execute('SELECT * FROM sungjuk')
        res = dbcursor.fetchall()
        tot_avg = 0
        # cnt = dbcursor.execute('SELECT COUNT(*) AS CNT FROM sungjuk')

        print('\n\t\t\t    *** 성적표 ***')
        print('===============================================')
        print("학번   이름   국어   영어   수학   총점   평균   등급")
        print('===============================================')
        for row in res:
            tot_avg += row[7]
            print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" % (row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8]))
        print('===============================================')
        print("                총 학생 수 = %d,  전체 평균 = %.2f" % (len(res), tot_avg/len(res)))
    elif num == 3:
        # check_record(lst)
        dbcursor.execute('SELECT * FROM sungjuk')
        res = dbcursor.fetchall()
        check_hakbun = input("\n조회할 학번을 입력하세요: ")

        for row in res:
            if row[1] == check_hakbun:
                dbcursor.execute('SELECT * FROM sungjuk where hakbun=?', (check_hakbun,))
                # print(row)
                print('===============================================')
                print("학번   이름   국어   영어   수학   총점   평균   등급")
                print('===============================================')
                print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" % (row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8]))
                print('===============================================')

    elif num == 4:
        res = dbcursor.execute('SELECT * FROM sungjuk')
        check_hakbun = input("\n수정할 학번을 입력하세요: ")
        flag = 0
        sungjuk = Sungjuk()
        for row in res:
            if row[1] == check_hakbun:
                kor = int(input("국어 성적: "))
                eng = int(input("영어 성적: "))
                math = int(input("수학 성적: "))
                # sungjuk.process_sungjuk()
                tot = kor + eng + math
                avg = tot / 3
                if avg >= 90:
                    grade = "수"
                elif 80 <= avg < 90:
                    grade = "우"
                elif 70 <= avg < 80:
                    grade = "미"
                elif 60 <= avg < 70:
                    grade = "양"
                else:
                    grade = "가"

                dbcursor.execute('update sungjuk set kor=?, eng=?, math=?, tot=?, avg=?, grade=? where hakbun=?',
                                 (kor, eng, math, tot, avg, grade, check_hakbun))
                dbconn.commit()
                flag = 1

        if flag == 0:
            print("\n수정 실패\n")
        else:
            print("\n수정 성공\n")
    elif num == 5:
        res = dbcursor.execute('SELECT * FROM sungjuk')
        check_hakbun = input("\n삭제할 학번을 입력하세요: ")
        flag = 0
        for row in res:
            # delete_record(lst)
            if row[1] == check_hakbun:
                dbcursor.execute('delete from sungjuk where hakbun=?', (check_hakbun,))
                dbconn.commit()
                flag = 1
        if flag == 0:
            print("\n삭제 실패\n")
        else:
            print("\n삭제 성공\n")
    elif num == 6:
        print("\n프로그램 종료...")
        break
    else:
        print("\n메뉴에 포함되는 숫자를 다시 선택해주세요.")



dbcursor.close()
dbconn.close()

