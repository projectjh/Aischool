hakbun = input("학번 입력 => ")
irum = input("이름 입력 => ")
kor = int(input("국어 점수 입력 => "))
eng = int(input("영어 점수 입력 => "))
math = int(input("수학 점수 입력 => "))

tot = kor + eng + math
avg = tot / 3

print('\n\t\t\t *** 성적표 ***')
print('=============================================')
print("학번   이름   국어   영어   수학   총점   평균")
print('=============================================')
print("%4s  %3s   %3d   %3d   %3d   %3d   %5.2f" %
      (hakbun, irum, kor, eng, math, tot, avg))
print('=============================================')