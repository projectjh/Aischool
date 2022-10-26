import cv2 as cv

a = 0.0
while (a <= 1.0):
    img1 = cv.imread("../images/cat.jpg")
    img2 = cv.imread("../images/butterfly.jpg")

    width = img1.shape[1]
    height = img1.shape[0]
    img2 = cv.resize(img2, (width, height))

    b = 1.0 - a
    dst = cv.addWeighted(img1, a, img2, b, 0)
    cv.imshow("dst", dst)
    cv.waitKey(0)

    print(a, ",", b)
    a += 0.2

cv.destroyAllWindows()
