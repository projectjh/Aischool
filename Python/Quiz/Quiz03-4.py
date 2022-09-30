# 성적 입력 업그레이드 버전2

# *** 메뉴 ***
# 1. 성적 정보 입력
# 2. 성적 정보 출력
# 3. 성적 정보 조회
# 4. 성적 정보 수정
# 5. 성적 정보 삭제
# 6. 프로그램 종료

# 2. 출력 부분에 총 학생 수와 전체 평균 구해서 추가
# 학번을 이용하여 3, 4, 5 실행
# 3. 조회 => 조회할 학번을 입력하세요. (잘못 입력시 '조회할 학번 A001이 없습니다.' 출력)
# 4. 수정 => 국어, 영어, 수학 점수만 수정되도록 하고 전체 성적 출력
# 5. 삭제 => 삭제할 학번을 입력하세요.


def menu():
    print()
    print(" *** 메뉴 *** ")
    print("1. 성적 정보 입력")
    print("2. 성적 정보 출력")
    print("3. 성적 정보 조회")
    print("4. 성적 정보 수정")
    print("5. 성적 정보 삭제")
    print("6. 프로그램 종료")

def record(lst):
    dct = {}

    dct['hakbun'] = input("\n학번 입력 => ")
    dct['irum'] = input("이름 입력 => ")
    dct['kor'] = int(input("국어 점수 입력 => "))
    dct['eng'] = int(input("영어 점수 입력 => "))
    dct['math'] = int(input("수학 점수 입력 => "))

    dct['tot'] = dct['kor'] + dct['eng'] + dct['math']
    dct['avg'] = dct['tot'] / 3

    # 등급 계산 조건문
    if dct['avg'] >= 90:
        dct['grade'] = "수"
    elif 80 <= dct['avg'] < 90:
        dct['grade'] = "우"
    elif 70 <= dct['avg'] < 80:
        dct['grade'] = "미"
    elif 60 <= dct['avg'] < 70:
        dct['grade'] = "양"
    else:
        dct['grade'] = "가"

    # 리스트에 딕셔너리 객체 추가
    lst.append(dct)
    print("\n성적 정보 입력 성공!")


def print_record(lst):
    tot_avg = 0
    print('\n\t\t\t    *** 성적표 ***')
    print('===============================================')
    print("학번   이름   국어   영어   수학   총점   평균   등급")
    print('===============================================')
    # lst안의 딕셔너리를 반복해서 출력 (가지고 있는 리스트 개수만큼 반복 실행)
    for dct in lst:
        tot_avg += dct['avg']
        print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
              (dct['hakbun'], dct['irum'], dct['kor'], dct['eng'], dct['math'], dct['tot'], dct['avg'], dct['grade']))
    print('===============================================')
    print("                총 학생 수 = %d,  전체 평균 = %.2f" % (len(lst), tot_avg/len(lst)))

def check_record(lst):
    # print(lst)
    check_hakbun = input("\n조회할 학번을 입력하세요: ")

    for data in lst:
        if data['hakbun'] == check_hakbun:
            print('===============================================')
            print("학번   이름   국어   영어   수학   총점   평균   등급")
            print('===============================================')
            print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
                  (data['hakbun'], data['irum'], data['kor'], data['eng'], data['math'], data['tot'], data['avg'],
                   data['grade']))
            print('===============================================')
            break
    else:
        print("조회할 학번 %s이 없습니다." % check_hakbun)

def modify_record(lst):
    check_hakbun = input("\n수정할 학번을 입력하세요: ")

    for data in lst:
        if data['hakbun'] == check_hakbun:
            data['kor'] = int(input("국어 점수를 수정해주세요: "))
            data['eng'] = int(input("수학 점수를 수정해주세요: "))
            data['math'] = int(input("영어 점수를 수정해주세요: "))
            data['tot'] = data['kor'] + data['eng'] + data['math']
            data['avg'] = data['tot'] / 3
            # 등급 계산 조건문
            if data['avg'] >= 90:
                data['grade'] = "수"
            elif 80 <= data['avg'] < 90:
                data['grade'] = "우"
            elif 70 <= data['avg'] < 80:
                data['grade'] = "미"
            elif 60 <= data['avg'] < 70:
                data['grade'] = "양"
            else:
                data['grade'] = "가"

            return lst
            break
    else:
        print("수정할 학번 %s이 없습니다." % check_hakbun)


def delete_record(lst):
    check_hakbun = input("\n삭제할 학번을 입력하세요: ")

    for data in lst:
        if data['hakbun'] == check_hakbun:
            lst.remove(data)
            print("성적 정보 삭제 성공!")
            break
    else:
        print("\n삭제할 학번 %s이 없습니다." % check_hakbun)


if __name__ == "__main__":
    lst = []

    while True:
        menu()
        num = input("\n메뉴를 선택하세요: ")

        if num == "1":
           record(lst)
        elif num == "2":
            print_record(lst)
        elif num == "3":
            check_record(lst)
        elif num == "4":
            modify_record(lst)
        elif num == "5":
            delete_record(lst)
        elif num == "6":
            print("\n프로그램 종료...")
            break
        else:
            print("\n메뉴를 다시 선택해주세요.")

