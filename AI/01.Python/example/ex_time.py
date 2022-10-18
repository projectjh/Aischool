# from time import localtime, time
#
# tm = localtime(time())
# print("year:", tm.tm_year)
# print("month:", tm.tm_mon)
# print("day:", tm.tm_mday)
# print("hour:", tm.tm_hour)
# print("minute:", tm.tm_min)
# print("second:", tm.tm_sec)
# print(tm)

import time

# 1970년 1월 1일 자정 이후로 누적된 초를 float 단위로 반환
secs = time.time()
print(secs)     # millisecond로 출력

print("\n1. -----------------------------------------")
# tm = time.gmtime(time.time()) # 현재 시간을 gmt타임으로 구해서 출력
tm = time.localtime(secs)       # 현재 시간을 local타임으로 구해서 출력
print("year:", tm.tm_year)
print("month:", tm.tm_mon)
print("day:", tm.tm_mday)
print("hour:", tm.tm_hour)
print("minute:", tm.tm_min)
print("second:", tm.tm_sec)

print("\n2. -----------------------------------------")
tm = time.localtime(secs)
# time_struct 타입 데이터를 특정 포멧의 문자열로 변환
string = time.strftime('%Y-%m-%d %I:%M:%S %p', tm)
print(string)

print("\n3. -----------------------------------------")
string = '2019-11-30 02:35:26 PM'
# 특정 포멧의 문자열을 time_struct 타입 데이터로 변환
tm = time.strptime(string, '%Y-%m-%d %I:%M:%S %p')
print(tm)

print("\n4. -----------------------------------------")
string = time.ctime(secs)   # timestamp를 문자열로 변환 (요일 월 일 시:분:초 년도)
print(string)

print("\n5. -----------------------------------------")
print("before")
time.sleep(3)   # 일정 시간 동안 실행 지연
print("after")