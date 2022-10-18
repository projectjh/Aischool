import xlsxwriter

workBook = xlsxwriter.Workbook("xlsxwriter2.xlsx")
ws = workBook.add_worksheet("성적표")

data = [('홍길동', 80, 70, 90), ('이기자', 90, 60, 80), ('강기자', 80, 80, 70)]

row = 0     # 첫번째 행이 0부터 시작
col = 0     # 첫번째 열이 0부터 시작

"""
for irum, kor, eng, math in data:
    ws.write(row, col, irum)
    ws.write(row, col+1, kor)
    ws.write(row, col+2, eng)
    ws.write(row, col+3, math)
    row += 1
"""

for val in data:
    for i in range(0, 4):
        ws.write(row, col+i, val[i])

    row += 1

ws.write(row, 0, '합계')
ws.write(row, 1, '=sum(B1:B3)')
ws.write(row, 2, '=sum(C1:C3)')
ws.write(row, 3, '=sum(D1:D3)')

workBook.close()
