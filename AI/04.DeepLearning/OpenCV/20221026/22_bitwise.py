import numpy as np
import cv2

src = cv2.imread("../images/analysis.jpg")
gray = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
_, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

_and = cv2.bitwise_and(gray, binary)
_or = cv2.bitwise_or(gray, binary)
_xor = cv2.bitwise_xor(gray, binary)
_not = cv2.bitwise_not(gray)

src = np.concatenate((np.zeros_like(gray), gray, binary, np.zeros_like(gray)), axis=1)
dst = np.concatenate((_and, _or, _xor, _not), axis=1)
dst = np.concatenate((src, dst), axis=0)

dst_re = cv2.resize(dst, dsize=(0, 0), fx=0.2, fy=0.2, interpolation=cv2.INTER_LINEAR)
cv2.imshow("dst", dst_re)

cv2.waitKey(0)
cv2.destroyAllWindows()
