import cv2

# src = cv2.imread("../images/convex.png")
# src = cv2.imread("../images/4star.jpg")
src = cv2.imread("../images/star.jpg")

dst = src.copy()
gray = cv2.cvtColor(src, cv2.COLOR_RGB2GRAY)
ret, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY_INV)
contours, hierarch = cv2.findContours(binary, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
# print(contours[0].shape, contours[1].shape, contours[2].shape, contours[3].shape)

for i in contours:
    print(i.shape)
    # 윤곽선에서 모멘트를 계산 후 dict 타입의 객체 반환
    M = cv2.moments(i)
    print(M)
    cX = int(M['m10'] / M['m00'])
    cY = int(M['m01'] / M['m00'])
    cv2.circle(dst, (cX, cY), 3, (255, 0, 0), -1)
    cv2.drawContours(dst, [i], 0, (0, 0, 255), 2)

cv2.imshow('dst', dst)

cv2.waitKey(0)
cv2.destroyAllWindows()
