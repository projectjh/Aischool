# class Car:
#     def __init__(self):
#         self._price = 0
#         self._speed = 0
#         self._color = None
#
#     # 밑줄 한개 사용은 이렇게 함수로 값을 가져오거나 변경하는 형식으로 사용
#     def get_price(self):
#         return self._price
#
#     def set_price(self, value):
#         self._price = value
#
#     def get_speed(self):
#         return self._speed
#
#     def set_speed(self, value):
#         self._speed = value
#
#     def get_color(self):
#         return self._color
#
#     def set_color(self, value):
#         self._color = value
#
#
# if __name__ == "__main__":
#     my_car = Car()
#     my_car.set_price(2000)
#     my_car.set_speed(20)
#     my_car.set_color("red")
#     print("가격:", my_car.get_price())
#     print("속도:", my_car.get_speed())
#     print("색상:", my_car.get_color())



# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def get_name(self):
#         print("제 이름은 %s입니다." % self.name)
#
#     def get_age(self):
#         print("제 나이는 %d세입니다." % self.age)
#
# # 괄호 안에 있는 Person은 부모 클래스(상위 클래스, 슈퍼 클래스)
# # Student는 자식 클래스(하위 클래스, 파생 클래스)
# class Student(Person):
#     def __init__(self, name, age, grade):
#         # super() => 부모 클래스를 생성자를 호출하는 형식
#         # 파이썬에서는 부모 클래스 생성자를 호출하지 않으면 부모 클래스의 생성자는 실행이 되지 않으므로 속성ㅇ,ㄹ 사용할 수 없다.
#         # 부모 클래스 생성자를 호출할때는 가장 먼저 선언해야 한다.
#         super().__init__(name, age)
#         self.grade = grade
#
#     def get_grade(self):
#         print("제 학점은 %.1f입니다." % self.grade)
#
# if __name__ == "__main__":
#     obj = Student("이기자", 27, 3.3)
#     obj.get_name()
#     obj.get_age()
#     obj.get_grade()



class Person1:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        # print("제 이름은 %s입니다." % self.name)
        print("제 이름은 %s입니다." % "강하다")

    def get_age1(self):
        print("제 나이는 %d세입니다." % self.age)

class Person2:
    # def __init__(self, name, age):
    #     self.name = name
    #     self.age = age

    def get_name(self):
        print("제 이름은 %s입니다." % self.name)
        # print("제 이름은 %s입니다." % "강하다")

    def get_age2(self):
        print("제 나이는 %d세입니다." % self.age)

# 부모를 여러개 지정하여 상속 받는 것이 가능하다 => 다중 상속
# 속성이 같은 경우 먼저 상속받은 내용이 실행
class Student(Person1, Person2):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def get_grade(self):
        print("제 학점은 %.1f입니다." % self.grade)

if __name__ == "__main__":
    obj = Student("이기자", 27, 3.3)
    obj.get_name()
    obj.get_age1()
    obj.get_age2()
    obj.get_grade()