dct = {}

dct['hakbun'] = input("학번 입력 => ")
dct['irum'] = input("이름 입력 => ")
dct['kor'] = int(input("국어 점수 입력 => "))
dct['eng'] = int(input("영어 점수 입력 => "))
dct['math'] = int(input("수학 점수 입력 => "))

dct['tot'] = dct['kor'] + dct['eng'] + dct['math']
dct['avg'] = dct['tot'] / 3


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


# print(dct)
print('\n\t\t\t    *** 성적표 ***')
print('================================================')
print("학번   이름   국어   영어   수학   총점   평균   등급")
print('================================================')
print("%4s  %3s   %3d    %3d   %3d   %3d  %5.2f   %s" %
      (dct['hakbun'], dct['irum'], dct['kor'], dct['eng'], dct['math'], dct['tot'], dct['avg'], dct['grade']))
print('================================================')