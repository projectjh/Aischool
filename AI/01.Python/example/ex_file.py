# 파일 사용 1 - write()
# fp = open("text.txt", "wt", encoding="utf-8")
# fp.write("%d\n" % 1)
# fp.write("%.2f\n" % 3.14)
# fp.write("Hello World\n")
# fp.write("안녕 파이썬!")
# fp.close()

# 파일 사용 2 - read()
# fp = open("text.txt", "rt", encoding="utf-8")
# contents = fp.read()
# print(contents)
# fp.close()

# 파일 사용 3 - readline()
# fp = open("text.txt", "rt", encoding="utf-8")
# line = fp.readline()
# print(line.strip())     # stirp() - 줄바꿈 문자를 제거 해주는 함수
# line = fp.readline()
# print(line.strip())
# line = fp.readline()
# print(line.strip())
# line = fp.readline()
# print(line.strip())
# fp.close()

# => 위와 같이 반복된 코드를 사용할 때 처리하는 방법
# fp = open("text.txt", "rt", encoding="utf-8")
#
# while True:
#     line = fp.readline()
#     if line == '':
#         break
#     # print(line.strip())
#     print(line, end="")
#
# fp.close()

# 파일 사용 4 - readlines()
fp = open("text.txt", "rt", encoding="utf-8")
lines = fp.readlines()
# print(lines)
# 리스트 객체를 한 줄 씩 출력하고 싶다면 반복문 사용
for line in lines:
    print(line, end="")

fp.close()