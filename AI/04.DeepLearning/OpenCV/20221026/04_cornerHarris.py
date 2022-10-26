import cv2
import numpy as np

img = cv2.imread("../images/coffee.jpg")
img2 = img.copy()

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
corner = cv2.cornerHarris(gray, 2, 3, 0.04)
coord = np.where(corner > 0.1 * corner.max())
coord = np.stack((coord[1], coord[0]), axis=-1)     # axis=-1: 수평으로 쌓음

for x, y in coord:
    cv2.circle(img, (x, y), 5, (0, 0, 255), 1, cv2.LINE_AA)     # 급격히 변화가 생기는 코너 표시

corner_norm = cv2.normalize(corner, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)   # 부호는 정수형, 8bit unsigned
corner_norm = cv2.cvtColor(corner_norm, cv2.COLOR_GRAY2BGR)

# cornerHarris 비교를 위해 추가
gray = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
corner2 = cv2.cornerHarris(gray, 2, 3, 0.06)
coord2 = np.where(corner2 > 0.1 * corner2.max())
coord2 = np.stack((coord2[1], coord2[0]), axis=-1)     # axis=-1: 수평으로 쌓음

for x, y in coord2:
    cv2.circle(img2, (x, y), 5, (0, 0, 255), 1, cv2.LINE_AA)     # 급격히 변화가 생기는 코너 표시

corner_norm2 = cv2.normalize(corner2, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)   # 부호는 정수형, 8bit unsigned
corner_norm2 = cv2.cvtColor(corner_norm2, cv2.COLOR_GRAY2BGR)

# merged = np.hstack((corner_norm, img))  # 이미지를 좌우로 쌓음
# merged = np.hstack((corner_norm, img, corner_norm2, img2))
merged = np.hstack((img, img2))
merged_re = cv2.resize(merged, dsize=(0, 0), fx=0.3, fy=0.3, interpolation=cv2.INTER_LINEAR)

cv2.imshow('Harris Corner', merged_re)

cv2.waitKey()
cv2.destroyAllWindows()