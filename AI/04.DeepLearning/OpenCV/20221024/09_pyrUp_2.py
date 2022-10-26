import cv2

img = cv2.imread("../images/cat.jpg")
dst_pyrUp = cv2.pyrUp(img)
dst_pyrDown = cv2.pyrDown(img)

cv2.imshow('img', img)
cv2.imshow('pyrUp', dst_pyrUp)
cv2.imshow('pyrDown', dst_pyrDown)
print(img.shape, dst_pyrUp.shape, dst_pyrDown.shape)

cv2.waitKey()
cv2.destroyAllWindows()
