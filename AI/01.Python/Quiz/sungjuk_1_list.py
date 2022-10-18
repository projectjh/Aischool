lst = []

lst.append(input("학번 입력 => "))
lst.append(input("이름 입력 => "))
lst.append(int(input("국어 점수 입력 => ")))
lst.append(int(input("영어 점수 입력 => ")))
lst.append(int(input("수학 점수 입력 => ")))
lst.append(lst[2] + lst[3] + lst[4])
lst.append(lst[5]/ 3)

print(lst)
# print('\n\t\t\t   *** 성적표 ***')
# print('=============================================')
# print("학번   이름   국어   영어   수학   총점   평균")
# print('=============================================')
# print("%4s   %3s   %3d   %3d   %3d   %3d   %5.2f" %
#       (lst[0], lst[1], lst[2], lst[3], lst[4], lst[5], lst[6]))
# print('=============================================')