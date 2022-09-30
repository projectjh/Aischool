# 임의의 두 수를 입력받아 작은 수 에서 큰 수 사이에 존재하는 소수와 소수의 개수를 출력하세요.

a = int(input("첫 번째 숫자 입력 => "))
b = int(input("두 번째 숫자 입력 => "))

if a > b:
    min = b
    max = a
else:
    min = a
    max = b

count = 0
# prime = 0
# print()
# for num in range(min, max+1):
#     # print(num, end=" ")
#     for i in range(2, max):
#         if num % i == 0:
#             break
#         else:
#             prime = num
#     count += 1
#     print(prime, end=" ")
#
# print("\n총 소수의 개수 = ", count)

# 정답!
print()
for num in range(min, max+1):
    for i in range(2, num):
        if num % i == 0:
            break
    else:   # 소수인 경우 수행 => js에서는 i=num과 같은 조건을 넣어주는데 파이썬에서는 i와 num이 같으면 for문을 빠져나오게 되므로 같은 형식으로 볼 수 있다.
        print(num, end=" ")
        count += 1
        if count % 10 == 0:     # 소수 개수 10개마다 줄바꿈 실행을 위한 조건문
            print()

print("\n총 소수의 개수 = ", count)