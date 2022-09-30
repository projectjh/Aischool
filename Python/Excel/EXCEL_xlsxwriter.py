# 사이트 : https://xlsxwriter.readthedocs.io/
# 엑셀 문서로 출력하기 위한 용도로 사용 (읽기는 불가) => 속도는 openpyxl보다 빠름
# 설치 : pip install Xlsxwriter

import xlsxwriter

workBook = xlsxwriter.Workbook("xlsxwriter1.xlsx")
ws = workBook.add_worksheet("테스트")  # 워크시트 추가

ws.write('A1', 'korea')
ws.write(3, 3, 'test1')     # 위치는 0부터 시작 (cf. openpyxl은 1부터 시작)
ws.write(4, 4, 'test2')
ws.write(0, 0, 'test3')
ws.write('B1', 10)
ws.write('B2', 20)
ws.write('B3', '=sum(B1:B2)')
ws.write('A2', 'fighting')

workBook.close()
