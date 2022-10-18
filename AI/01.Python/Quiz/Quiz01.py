# 임의의 두 수를 입력 받은 후 작은 수에서 큰 수 사이에 존재하는 구구단을 출력하세요.

a = int(input("첫번째 숫자 입력 => "))
b = int(input("두번째 숫자 입력 => "))

if a < b:
    min = a
    max = b
else:
    min = b
    max = a

print()
for num in range(min, max+1):
    print(" ** %d단 **  " % num, end="")
print()
for i in range(1, 10):
    for num in range(min, max + 1):
        print("%d * %d = %2d  " % (num, i, num*i), end="")
    print()