import cv2

src = cv2.imread("../images/contour.png", cv2.IMREAD_COLOR)
# src = cv2.imread("../images/contour_test.png", cv2.IMREAD_COLOR)
gray = cv2.cvtColor(src, cv2.COLOR_RGB2GRAY)
ret, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)
binary = cv2.bitwise_not(binary)
contours, hierarchy = cv2.findContours(binary, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
# contours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
print(contours[0].shape)
print(len(contours))

for i in range(len(contours)):
    cv2.drawContours(src, [contours[i]], 0, (0, 0, 255), 2)
    print(len(contours[i]))
    cv2.putText(src, str(i), tuple(contours[i][0][0]), cv2.FONT_HERSHEY_COMPLEX, 0.8, (0, 255, 0), 1)
    # 윤곽선을 그리고 표시하는 부분
    print(i, hierarchy[0][i])
    cv2.imshow("src", src)
    cv2.waitKey(0)

    # binary로 변경해서 보면 비어있는 부분도 윤곽선 표시 한 것을 확인할 수 있다.
    # cv2.drawContours(binary, [contours[i]], 0, (0, 0, 255), 2)
    # print(len(contours[i]))
    # cv2.putText(binary, str(i), tuple(contours[i][0][0]), cv2.FONT_HERSHEY_COMPLEX, 0.8, (0, 255, 0), 1)
    # # 윤곽선을 그리고 표시하는 부분
    # print(i, hierarchy[0][i])
    # cv2.imshow("src", binary)
    # cv2.waitKey(0)

cv2.destroyAllWindows()
