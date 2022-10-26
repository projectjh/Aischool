import numpy as np
import cv2

src = cv2.imread("../images/zebra.jpg")
kernel = cv2.getStructuringElement(cv2.MORPH_CROSS, (9, 9))
dilate = cv2.dilate(src, kernel, anchor=(-1, -1), iterations=5)
erode = cv2.erode(src, kernel, anchor=(-1, -1), iterations=5)
# 커널사이즈가 커지면 침식과 팽창 모두 크게 늘어난다.

dst = np.concatenate((src, dilate, erode), axis=1)
dst_re = cv2.resize(dst, dsize=(0, 0), fx=0.25, fy=0.25, interpolation=cv2.INTER_LINEAR)

cv2.imshow('dst', dst_re)
cv2.waitKey(0)
cv2.destroyAllWindows()
