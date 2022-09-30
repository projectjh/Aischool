# 성적 입력 업그레이드 버전
#   *** 메뉴 ***
# 1. 성적 정보 입력
# 2. 성적 정보 출력
# 6. 프로그램 종료

# 위 메뉴를 선택했을때 실행되도록 만들기

# def menu():
#     print()
#     print(" *** 메뉴 *** ")
#     print("1. 성적 정보 입력")
#     print("2. 성적 정보 출력")
#     print("6. 프로그램 종료")
#
#     num = input("\n메뉴를 선택하세요: ")
#     return num
#
# def record(lst):
#     while True:
#         dct = {}
#
#         dct['hakbun'] = input("\n학번 입력 => ")
#         dct['irum'] = input("이름 입력 => ")
#         dct['kor'] = int(input("국어 점수 입력 => "))
#         dct['eng'] = int(input("영어 점수 입력 => "))
#         dct['math'] = int(input("수학 점수 입력 => "))
#
#         dct['tot'] = dct['kor'] + dct['eng'] + dct['math']
#         dct['avg'] = dct['tot'] / 3
#
#         # 등급 계산 조건문
#         if dct['avg'] >= 90:
#             dct['grade'] = "수"
#         elif 80 <= dct['avg'] < 90:
#             dct['grade'] = "우"
#         elif 70 <= dct['avg'] < 80:
#             dct['grade'] = "미"
#         elif 60 <= dct['avg'] < 70:
#             dct['grade'] = "양"
#         else:
#             dct['grade'] = "가"
#
#         # 리스트에 딕셔너리 객체 추가
#         lst.append(dct)
#         print("\n성적 정보 입력 성공!")
#         break
#
# def print_record(lst):
#     print('\n\t\t\t    *** 성적표 ***')
#     print('===============================================')
#     print("학번   이름   국어   영어   수학   총점   평균   등급")
#     print('===============================================')
#     # lst안의 딕셔너리를 반복해서 출력 (가지고 있는 리스트 개수만큼 반복 실행)
#     for dct in lst:
#         print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
#               (dct['hakbun'], dct['irum'], dct['kor'], dct['eng'], dct['math'], dct['tot'], dct['avg'], dct['grade']))
#     print('===============================================')
#
# if __name__ == "__main__":
#     lst = []
#     while True:
#         num = menu()
#
#         if num == "1":
#             record(lst)
#         elif num == "2":
#             print_record(lst)
#         elif num == "6":
#             print("\n프로그램 종료...")
#             break

# 반복문 중복 할 필요 없이 코드 줄이기
# def menu():
#     print()
#     print(" *** 메뉴 *** ")
#     print("1. 성적 정보 입력")
#     print("2. 성적 정보 출력")
#     print("6. 프로그램 종료")
#
# def record(lst):
#     dct = {}
#
#     dct['hakbun'] = input("\n학번 입력 => ")
#     dct['irum'] = input("이름 입력 => ")
#     dct['kor'] = int(input("국어 점수 입력 => "))
#     dct['eng'] = int(input("영어 점수 입력 => "))
#     dct['math'] = int(input("수학 점수 입력 => "))
#
#     dct['tot'] = dct['kor'] + dct['eng'] + dct['math']
#     dct['avg'] = dct['tot'] / 3
#
#     # 등급 계산 조건문
#     if dct['avg'] >= 90:
#         dct['grade'] = "수"
#     elif 80 <= dct['avg'] < 90:
#         dct['grade'] = "우"
#     elif 70 <= dct['avg'] < 80:
#         dct['grade'] = "미"
#     elif 60 <= dct['avg'] < 70:
#         dct['grade'] = "양"
#     else:
#         dct['grade'] = "가"
#
#     # 리스트에 딕셔너리 객체 추가
#     lst.append(dct)
#     print("\n성적 정보 입력 성공!")
#
# def print_record(lst):
#     print('\n\t\t\t    *** 성적표 ***')
#     print('===============================================')
#     print("학번   이름   국어   영어   수학   총점   평균   등급")
#     print('===============================================')
#     # lst안의 딕셔너리를 반복해서 출력 (가지고 있는 리스트 개수만큼 반복 실행)
#     for dct in lst:
#         print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
#               (dct['hakbun'], dct['irum'], dct['kor'], dct['eng'], dct['math'], dct['tot'], dct['avg'], dct['grade']))
#     print('===============================================')
#
# if __name__ == "__main__":
#     lst = []
#     while True:
#         menu()
#         num = input("\n메뉴를 선택하세요: ")
#
#         if num == "1":
#             record(lst)
#         elif num == "2":
#             print_record(lst)
#         elif num == "6":
#             print("\n프로그램 종료...")
#             break
#         else:
#           print("\n메뉴를 다시 선택해주세요.")


# 선생님 Answer
def f_menu():
    print()
    print(" *** 메뉴 *** ")
    print("1. 성적 정보 입력")
    print("2. 성적 정보 출력")
    print("6. 프로그램 종료")

def f_input(f_students):
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
    f_students.append(dct)
    print("\n성적 정보 입력 성공!")

def f_output(f_students):
    print('\n\t\t\t    *** 성적표 ***')
    print('===============================================')
    print("학번   이름   국어   영어   수학   총점   평균   등급")
    print('===============================================')
    # lst안의 딕셔너리를 반복해서 출력 (가지고 있는 리스트 개수만큼 반복 실행)
    for dct in f_students:
        print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
              (dct['hakbun'], dct['irum'], dct['kor'], dct['eng'], dct['math'], dct['tot'], dct['avg'], dct['grade']))
    print('===============================================')

if __name__ == "__main__":
    students = []

    while True:
        f_menu()
        menu = int(input("\n메뉴를 선택하세요: "))
        if menu == 1:
            f_input(students)
        elif menu == 2:
            f_output(students)
        elif menu == 6:
            print("\n프로그램 종료...")
            break
        else:
            print("\n메뉴를 다시 입력하세요!!!\n")


