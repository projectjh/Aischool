import cv2

img = cv2.imread("../images/star.jpg")
# img = cv2.imread("../images/convex.png")
img1 = img.copy()
imgray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
ret, thr = cv2.threshold(imgray, 127, 255, 0)
contours, _ = cv2.findContours(thr, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contour = contours[1]

cv2.drawContours(img, [contour], 0, (0, 0, 255), 3)
check = cv2.isContourConvex(contour)    # check값에는 0 아니면 1이 저장

if not check:
    hull = cv2.convexHull(contour)
    cv2.drawContours(img1, [hull], 0, (0, 0, 255), 3)
    img1 = cv2.resize(img1, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA)
    cv2.imshow("convexHull", img1)

img = cv2.resize(img, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA)
cv2.imshow('contour', img)

cv2.waitKey(0)
cv2.destroyAllWindows()
