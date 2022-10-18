# class이름은 Sungjuk
# 속성은 hakbun, irum, kor, eng, math, tot, avg, grade => 총 8개
# 메소드 이름은 input_sungjuk(), process_sungjuk(), output_sungjuck() => 총 3개
#             => 입력 / 총점, 평균, 등급 구하는 과정 / 출력


class Sungjuk():
    def __init__(self):
        self.hakbun = ""
        self.irum = ""
        self.kor = 0
        self.eng = 0
        self.math = 0
        # 출력할 내용 다 초기값에 담아주기!
        self.tot = 0
        self.avg = 0.0
        self.grade = None

    def input_sungjuk(self):
        self.hakbun = input("학번 : ")
        self.irum = input("이름 : ")
        # 아래와 같이 처리시 예외처리는 1번만 실행되므로 반복문으로 실행 필요
        # try:
        #     self.kor = int(input("국어 성적 : "))
        # except:
        #     print("숫자만 입력해주세요.")
        #     self.kor = int(input("국어 성적 : "))
        # try:
        #     self.eng = int(input("영어 성적 : "))
        # except:
        #     print("숫자만 입력해주세요.")
        #     self.eng = int(input("영어 성적 : "))
        # try:
        #     self.math = int(input("수학 성적 : "))
        # except:
        #     print("숫자만 입력해주세요.")
        #     self.math = int(input("수학 성적 : "))

        while True:
            try:
                self.kor = int(input("국어 성적 : "))
            except:
                print("숫자만 입력해주세요.")
                continue
            else:
                break

        while True:
            try:
                self.eng = int(input("영어 성적 : "))
            except:
                print("숫자만 입력해주세요.")
                continue
            else:
                break

        while True:
            try:
                self.math = int(input("수학 성적 : "))
            except:
                print("숫자만 입력해주세요.")
            else:
                break


    def process_sungjuk(self):
        self.tot = self.kor + self.eng + self.math
        self.avg = self.tot / 3
        if self.avg >= 90:
            self.grade = "수"
        elif 80 <= self.avg < 90:
            self.grade = "우"
        elif 70 <= self.avg < 80:
            self.grade = "미"
        elif 60 <= self.avg < 70:
            self.grade = "양"
        else:
            self.grade = "가"

    def output_sungjuk(self):
        # print(self.tot, self.avg, self.grade)
        print("%4s  %3s   %3d    %3d   %3d   %3d   %5.2f   %s" %
              (self.hakbun, self.irum, self.kor, self.eng, self.math, self.tot, self.avg, self.grade))

if __name__ == "__main__":
    sungjuk = Sungjuk()
    sungjuk.input_sungjuk()
    sungjuk.process_sungjuk()
    print('\n\t\t\t   *** 성적표 ***')
    print('===============================================')
    print("학번   이름   국어   영어   수학   총점   평균   등급")
    print('===============================================')
    sungjuk.output_sungjuk()
    print('===============================================')
