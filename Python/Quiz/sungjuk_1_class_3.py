# 2022-09-19 성적 클래스 사용건에 예외 처리 추가

from sungjuk_1_class import Sungjuk

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
    sungjuk = Sungjuk()
    dct = {}

    sungjuk.input_sungjuk()
    sungjuk.process_sungjuk()

    # 리스트에 딕셔너리 객체 추가
    lst.append(sungjuk)
    print("\n성적 정보 입력 성공!")


def print_record(lst):
    tot_avg = 0
    if len(lst) == 0:
        print("\n출력할 데이터가 없습니다!\n")
        return

    print('\n\t\t\t    *** 성적표 ***')
    print('===============================================')
    print("학번   이름   국어   영어   수학   총점   평균   등급")
    print('===============================================')
    # lst안의 딕셔너리를 반복해서 출력 (가지고 있는 리스트 개수만큼 반복 실행)
    for sungjuk in lst:
        tot_avg += sungjuk.avg
        sungjuk.output_sungjuk()
    print('===============================================')
    print("                총 학생 수 = %d,  전체 평균 = %.2f" % (len(lst), tot_avg/len(lst)))

def check_record(lst):
    # print(lst)
    check_hakbun = input("\n조회할 학번을 입력하세요: ")

    for sungjuk in lst:
        if sungjuk.hakbun == check_hakbun:
            print('===============================================')
            print("학번   이름   국어   영어   수학   총점   평균   등급")
            print('===============================================')
            sungjuk.output_sungjuk()
            print('===============================================')
            break
    else:
        print("조회할 학번 %s이 없습니다." % check_hakbun)

def modify_record(lst):
    check_hakbun = input("\n수정할 학번을 입력하세요: ")

    for sungjuk in lst:
        if sungjuk.hakbun == check_hakbun:
            while True:
                try:
                    sungjuk.kor = int(input("국어 점수 수정: "))
                except:
                    print("숫자만 입력해주세요.")
                    continue
                else:
                    break

            while True:
                try:
                    sungjuk.eng = int(input("영어 점수 수정: "))
                except:
                    print("숫자만 입력해주세요.")
                    continue
                else:
                    break

            while True:
                try:
                    sungjuk.math = int(input("수학 점수 수정: "))
                except:
                    print("숫자만 입력해주세요.")
                    continue
                else:
                    break
            sungjuk.process_sungjuk()
            print("성적 정보 수정 성공!")
        break
    else:
        print("수정할 학번 %s이 없습니다." % check_hakbun)


def delete_record(lst):
    check_hakbun = input("\n삭제할 학번을 입력하세요: ")

    for sungjuk in lst:
        if sungjuk.hakbun == check_hakbun:
            lst.remove(sungjuk)
            print("성적 정보 삭제 성공!")
            break
    else:
        print("\n삭제할 학번 %s이 없습니다." % check_hakbun)


if __name__ == "__main__":
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
        elif num == 2:
            print_record(lst)
        elif num == 3:
            check_record(lst)
        elif num == 4:
            modify_record(lst)
        elif num == 5:
            delete_record(lst)
        elif num == 6:
            print("\n프로그램 종료...")
            break
        else:
            print("\n메뉴에 포함되는 숫자를 다시 선택해주세요.")