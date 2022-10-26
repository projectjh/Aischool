import cv2

src = cv2.imread("../images/cat.jpg", cv2.IMREAD_COLOR)
dst = cv2.resize(src, dsize=(800, 600), interpolation=cv2.INTER_LINEAR)     # 이미지 확대시
dst2 = cv2.resize(src, dsize=(0, 0), fx=0.3, fy=0.7, interpolation=cv2.INTER_AREA)  # 이미지 축소시

cv2.imshow("src", src)
cv2.imshow("dst", dst)
cv2.imshow("dst2", dst2)

cv2.waitKey()
cv2.destroyAllWindows()
