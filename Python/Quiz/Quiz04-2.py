# 상품 정보 업그레이드 버전2

#  *** 메뉴 ***
# 1. 제품 정보 입력
# 2. 제품 정보 출력
# 3. 제품 정보 조회
# 4. 제품 정보 수정
# 5. 제품 정보 삭제
# 6. 프로그램 종료

# 제품 코드를 활용하여 조회, 수정, 삭제

def menu():
    print()
    print(" *** 메뉴 *** ")
    print("1. 제품 정보 입력")
    print("2. 제품 정보 출력")
    print("3. 제품 정보 조회")
    print("4. 제품 정보 수정")
    print("5. 제품 정보 삭제")
    print("6. 프로그램 종료")

def input_prod(lst):
    prd = {}

    prd['code'] = input("\n제품코드 입력 => ")
    prd['name'] = input("제품명 입력 => ")
    prd['amount'] = int(input("수량 입력 => "))
    prd['unit'] = int(input("단가 입력 => "))
    prd['price'] = prd['amount'] * prd['unit']

    lst.append(prd)
    print("\n제품 등록 완료!")

def print_prod(lst):
    total = 0
    print("\n            *** 상품정보 ***            ")
    print("===========================================")
    print("제품코드   제품명   수량     단가       판매금액")
    print("===========================================")
    for data in lst:
        total += data['price']
        print("%4s   %5s    %2d" %
              (data['code'], data['name'], data['amount']), "{:>10,}{:>12,}".format(data['unit'], data['price']))
    print("===========================================")
    print("                          총 금액: {:,}".format(total))


def check_prod(lst):
    code = input("\n조회할 제품 코드를 입력해주세요: ")

    for data in lst:
        if data['code'] == code:
            print("===========================================")
            print("제품코드   제품명   수량     단가       판매금액")
            print("===========================================")
            print("%4s   %5s    %2d" %
                  (data['code'], data['name'], data['amount']), "{:>10,}{:>12,}".format(data['unit'], data['price']))
            print("===========================================")
            break
    else:
        print("조회할 제품코드(%s)가 없습니다." % code)


def modify_prod(lst):
    code = input("\n수정할 제품 코드를 입력해주세요: ")

    for data in lst:
        if data['code'] == code:
            data['amount'] = int(input("수정할 수량을 입력해주세요 => "))
            data['unit'] = int(input("수정할 단가를 입력해주세요 => "))
            data['price'] = data['amount'] * data['unit']

            print("👏👏 수정 성공!")
            return lst
            break
    else:
        print("수정할 제품코드(%s)가 없습니다." % code)


def delete_prod(lst):
    code = input("\n삭제할 제품 코드를 입력해주세요: ")

    for data in lst:
        if data['code'] == code:
            lst.remove(data)

            print("👏👏 삭제 성공!")
            break
    else:
        print("삭제할 제품코드(%s)가 없습니다." % code)

if __name__ == "__main__":
    lst = []

    while True:
        menu()
        num = input("\n메뉴를 선택하세요: ")

        if num == "1":
            input_prod(lst)
        elif num == "2":
            print_prod(lst)
        elif num == "3":
            check_prod(lst)
        elif num == "4":
            modify_prod(lst)
        elif num == "5":
            delete_prod(lst)
        elif num == "6":
            print("\n프로그램 종료...")
            break
        else:
            print("\n메뉴를 다시 선택해주세요.")
