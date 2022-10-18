# 구구단을 함수로 변형하기 (함수 3개 만들기)

def input_num():
    a = int(input("첫번째 숫자 입력 => "))
    b = int(input("두번째 숫자 입력 => "))
    return a, b

def min_max(a, b):
    if a < b:
        min = a
        max = b
    else:
        min = b
        max = a

    return min, max


def gugudan(min, max):
    print()
    for num in range(min, max + 1):
        print("   ** %d단 **   " % num, end=" ")
    print()
    for i in range(1, 10):
        for num in range(min, max + 1):
            print(" %d * %d = %2d    " % (num, i, num * i), end=" ")
        print()

if __name__ == "__main__":
    a, b = input_num()     # 입력 받은 함수 호출해서 a, b변수에 패킹 작업
    min, max = min_max(a, b)
    gugudan(min, max)



