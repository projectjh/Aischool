# 2022-09-20 성적DB추가 후 연결(mysql버전)

from sungjuk_1_class import Sungjuk
import pymysql

def create_table():
    # 함수별로 연결과 닫기를 따로 실행하는 이유는 동시 접속자 수를 더 많게 하기 위해
    dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
    dbcursor = dbconn.cursor()

    dbcursor.execute("""create table if not exists sungjuk_mysql(
                        hakbun varchar(10) primary key,
                        irum varchar(10),
                        kor int,
                        eng int,
                        math int,
                        tot int,
                        avg float,
                        grade varchar(2))""")

    dbcursor.close()
    dbconn.close()

def menu():
    print()
    print(" *** 메뉴 *** ")
    print("1. 성적 정보 입력")
    print("2. 성적 정보 출력")
    print("3. 성적 정보 조회")
    print("4. 성적 정보 수정")
    print("5. 성적 정보 삭제")
    print("6. 프로그램 종료")

def record():
    obj = Sungjuk()

    obj.input_sungjuk()
    obj.process_sungjuk()

    sql = "insert into sungjuk_mysql (hakbun, irum, kor, eng, math, tot, avg, grade) values (%s, %s, %s, %s, %s, %s, %s, %s)"

    dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
    dbcursor = dbconn.cursor()

    try:
        dbcursor.execute(sql, (obj.hakbun, obj.irum, obj.kor, obj.eng, obj.math, obj.tot, obj.avg, obj.grade))
    except:
        # 학번이 기본키이므로 같은 내용 입력 시 예외 처리문 실행
        print("\n성적정보 입력 실패ㅠ\n")
        return
    else:
        dbconn.commit()
        dbcursor.execute('SELECT * FROM sungjuk_mysql')
        res = dbcursor.fetchall()
        print("\n성적정보 입력 성공\n")
        # return      # finally 수행 후 복귀하기때문에 return을 넣어줘도 생략해도 상관은없음.
    finally:
        dbcursor.close()
        dbconn.close()


def print_record():
    total_avg = 0

    dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
    dbcursor = dbconn.cursor()

    sql = "SELECT * FROM sungjuk_mysql"
    dbcursor.execute(sql)
    rows = dbcursor.fetchall()

    dbcursor.execute("SELECT count(*) FROM sungjuk_mysql")
    cnt = dbcursor.fetchone()[0]    # fetchone() => 한 개의 레코드(튜플 형식)

    if cnt == 0:
        print("\n출력할 데이터가 없습니다!\n")
    else:
        print('\n\t\t\t    *** 성적표 ***')
        print('===============================================')
        print("학번   이름   국어   영어   수학   총점   평균   등급")
        print('===============================================')
        for row in rows:
            total_avg += row[6]
            print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" % (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]))
        print('===============================================')
        print("                총 학생 수 = %d,  전체 평균 = %.2f" % (cnt, total_avg/cnt))

    dbcursor.close()
    dbconn.close()

def check_record():
    dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
    dbcursor = dbconn.cursor()

    hakbun = input("\n조회할 학번을 입력하세요: ")
    dbcursor.execute("SELECT * FROM sungjuk_mysql where hakbun=%s", (hakbun,))
    row = dbcursor.fetchone()
    # fetchone()은 조회 결과값이 없으면 None이 반환되므로 이를 조건문으로 만들어줌
    if row != None:
        print('===============================================')
        print("학번   이름   국어   영어   수학   총점   평균   등급")
        print('===============================================')
        print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" % (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]))
        print('===============================================')
    else:
        print("조회할 학번 %s이 없습니다." % hakbun)

    dbcursor.close()
    dbconn.close()

def modify_record():
    dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
    dbcursor = dbconn.cursor()

    hakbun = input("\n수정할 학번을 입력하세요: ")
    dbcursor.execute("SELECT * FROM sungjuk_mysql where hakbun=%s", (hakbun,))
    row = dbcursor.fetchone()
    if row[0] == hakbun:
        obj = Sungjuk()
        obj.hakbun = row[0]
        obj.kor = int(input("국어 점수 수정: "))
        obj.eng = int(input("영어 점수 수정: "))
        obj.math = int(input("수학 점수 수정: "))
        obj.process_sungjuk()

        dbcursor.execute("update sungjuk_mysql set kor=%s, eng=%s, math=%s, tot=%s, avg=%s, grade=%s where hakbun=%s",
                         (obj.kor, obj.eng, obj.math, obj.tot, obj.avg, obj.grade, obj.hakbun))
        print("\n성적 수정 성공!")
        dbconn.commit()
    else:
        print("\n수정할 학번 %s이 없습니다." % hakbun)

    dbcursor.close()
    dbconn.close()


def delete_record():
    dbconn = pymysql.connect(host='localhost', user='root', password='123456', db='bbs', charset='utf8')
    dbcursor = dbconn.cursor()

    hakbun = input("\n삭제할 학번을 입력하세요: ")
    dbcursor.execute("SELECT * FROM sungjuk_mysql where hakbun=%s", (hakbun,))
    row = dbcursor.fetchone()

    if row != None:
        dbcursor.execute("delete from sungjuk_mysql where hakbun=%s", (hakbun,))
        print("\n삭제 성공!")
        dbconn.commit()
    else:
        print("\n삭제할 학번 %s이 없습니다." % hakbun)

    dbcursor.close()
    dbconn.close()

if __name__ == "__main__":
    # lst = []
    create_table()

    while True:
        menu()

        try:
            num = int(input("\n메뉴를 선택하세요: "))
        except:
            print("\n메뉴는 숫자만 입력해주세요\n")
            continue

        if num == 1:
            record()
        elif num == 2:
            print_record()
        elif num == 3:
            check_record()
        elif num == 4:
            modify_record()
        elif num == 5:
            delete_record()
        elif num == 6:
            print("\n프로그램 종료...")
            break
        else:
            print("\n메뉴에 포함되는 숫자를 다시 선택해주세요.")