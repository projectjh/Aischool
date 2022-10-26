import cv2

src = cv2.imread("../images/chess.jpg", cv2.IMREAD_COLOR)
dst = src[100:600, 200:700].copy()

src = cv2.resize(src, (0, 0), fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA)
dst = cv2.resize(src, (0, 0), fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA)
cv2.imshow("src", src)
cv2.imshow("dst", dst)

cv2.waitKey()
cv2.destroyAllWindows()
