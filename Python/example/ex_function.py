def message():
    print("Hello, Python")

# 함수를 사용하기위해 import사용시 아래와 같이 선언된 내용도 함께 불려짐
# message()
# message()
# message()

# print(__name__)

# 위와 같이 함께 실행되는 것을 막기 위해 아래와 같이 선언
# => 파이썬에서 밑줄은 특정 속성에 값 저장
if __name__ == "__main__":
    message()
    message()
    message()