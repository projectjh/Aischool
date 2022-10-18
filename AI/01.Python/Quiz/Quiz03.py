# 성적 데이터를 입력받아 총점, 평균, 등급을 구한 다음 리스트 객체에 추가 후
# 학번에 exit를 입력 받으면 입력받은 내용을 한꺼번에 출력하는 프로그램을 작성하시오.

lst = []
while True:
    dct = {}

    dct['hakbun'] = input("학번 입력 => ")
    if dct['hakbun'] == "exit":     # if문 조건이 여기에 있어야 다른 내용 없이 break실행
        print(lst)
        break

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
    print()

print('\n\t\t\t    *** 성적표 ***')
print('===============================================')
print("학번   이름   국어   영어   수학   총점   평균   등급")
print('===============================================')
# lst안의 딕셔너리를 반복해서 출력 (가지고 있는 리스트 개수만큼 반복 실행)
for dct in lst:
    print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
          (dct['hakbun'], dct['irum'], dct['kor'], dct['eng'], dct['math'], dct['tot'], dct['avg'], dct['grade']))
print('===============================================')
