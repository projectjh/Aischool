# def divide(m, n):
#     try:
#         result = m / n
#     except ZeroDivisionError:                                   # 0으로 나눌경우 예외처리 실행 후 finally문 실행
#         print("0으로 나눌 수 없습니다.")
#     except:                                                     # 모든 예외 처리
#         print("ZeroDivisionError 이외의 예외가 발생했습니다.")
#     else:                                                       # try문이 정상 실행시 else문 실행 => else문 return을 통해 종료되므로 finally먼저 실행 후 종료
#         return result
#     finally:                                                    # finally문은 예외가 발생하든 안하든 실행
#         print("나눗셈 연산입니다.")
#
# if __name__ == "__main__":
#     result = divide(3, 2)
#     print(result, "\n")
#
#     result = divide(3, 0)
#     print(result, "\n")
#
#     result = divide(None, 2)
#     print(result)

# raise 구문 => 의도적으로 예외를 발생시켜야 할 경우 사용
# def userid(lang):
#     if lang == 'python':
#         raise Exception("파이썬!!")        # Exception은 가장 상위 예외 종류
#     print(lang)
#
# if __name__ == "__main__":
#     try:
#         userid("java")
#         userid("python")
#     except Exception as e:
#         # print(e.args[0])
#         print(e)        # 이렇게 작성하는 것과의 차이점은 뭐죵?

# 사용자 정의 예외
class JumsuException(Exception):
    def __init__(self, msg):
        self._message = msg

def input_jumsu():
    jumsu = int(input("점수 입력 => "))

    if jumsu < 0:
        raise JumsuException("0 이상만 가능")        # 예외 클래스를 만들지 않고 print문으로 바로 출력시 예외 처리 구문인지 파악할 수 없으므로 예외처리문을 사용해주는 것이 좋다.
    elif jumsu > 100:
        raise JumsuException("100 이하만 가능")
    else:
        return jumsu

if __name__ == "__main__":
    try:
        jumsu = input_jumsu()
    except JumsuException as e:
        print(e.args[0])
        # args는 예외처리 구문 만들 떄 자동으로 생성되는 것
    else:
        print("점수는 %d점 입니다." % jumsu)
