# 소수 구하기 문제를 함수로 변형(함수 3개 만들기)

# 함수1 - 두 수를 입력 받아 최솟값, 최댓값 구하기
def min_max():
    a = int(input("첫 번째 숫자 입력 => "))
    b = int(input("두 번째 숫자 입력 => "))

    if a > b:
        min = b
        max = a
    else:
        min = a
        max = b

    return min, max

# 함수2 - 소수 판별하여 출력
def prime_num(min, max):
    count = 0

    print()
    for num in range(min, max + 1):
        for i in range(2, num):
            if num % i == 0:
                break
        else:  # 소수인 경우 수행 => js에서는 i=num과 같은 조건을 넣어주는데 파이썬에서는 i와 num이 같으면 for문을 빠져나오게 되므로 같은 형식으로 볼 수 있다.
            print(num, end=" ")
            count += 1
            if count % 10 == 0:  # 소수 개수 10개마다 줄바꿈 실행을 위한 조건문
                print()

    return count

# 함수3 - 총 소수의 개수 출력
# (인자로 count를 받지 않아도 실행되는 이유는 count가 if문 아래에 전역변수(global)로 선언되어있기 때문에)
def prime_cnt():
    print("\n총 소수의 개수 =", count)

if __name__ == "__main__":
    min, max = min_max()
    count = prime_num(min, max)
    prime_cnt()
