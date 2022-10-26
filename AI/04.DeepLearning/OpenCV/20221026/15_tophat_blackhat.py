import cv2
import numpy as np

img = cv2.imread("../images/moon_gray.jpg")

k = cv2. getStructuringElement(cv2.MORPH_RECT, (9, 9))
tophat = cv2.morphologyEx(img, cv2.MORPH_TOPHAT, k)
blackhat = cv2.morphologyEx(img, cv2.MORPH_BLACKHAT, k)

# k2 = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))
# opening = cv2.morphologyEx(img, cv2.MORPH_OPEN, k2)
# closing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, k2)

merged = np.hstack((img, tophat, blackhat))
# merged = np.hstack((img, tophat, opening, blackhat, closing))
cv2.imshow('tophat blackhat', merged)

cv2.waitKey(0)
cv2.destroyAllWindows()
