"""
*** 시-토마시 검출 (Shi & Tomasi Detection)
: 헤리스 코너 검출을 좀 더 개선한 알고리즘
cv2.goodFeaturesToTrack(image, maxCorners, qualityLevel, minDistance, corners=None, mask=None, blockSize=None, useHarriDetector=None, k=None)
- 3차원 실수 행렬(N, 1, 2)로 반환하며 N으로 코너점 검출 개수를 반환한다.
- x 좌표는 [i, 0, 0], y 좌표는 [i, 0, 1] 이다.
- 실수로 저장되므로 int로 변환하여 사용해야한다.

* 파라미터
- image: 입력 이미지
- maxCorners: 최대 코너 개수. 코너 최댓값보다 낮은 개수만 반환. xCorners <= 0 이면 무제한
- qualityLevel: 코너점 결정을 위한 값. 반환할 코너의 최소 품질을 설정.
                코너 품질은 0.0 ~ 1.0 사이의 값으로 할당할 수 있으며, 일반적으로 0.01 ~ 0.10 사이의 값을 사용
- minDistance: 코너점 사이의 최소 거리. 설정된 최소 거리 이상의 값만 검출
- corners: 검출된 코너점 좌표. numpy.ndarray shape=(N, 1, 2) dtype=numpy.float32
- blockSize: 코너 검출을 위한 블록 크기 (default=3)
- userHarrisDetector: 해리스 코너 방법 사용 여부 (default=False)
- k : 해리스 코너 검출시 사용할 k 값
"""

import cv2
import numpy as np

img = cv2.imread("../images/coffee.jpg")
img2 = img.copy()

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
corners = cv2.goodFeaturesToTrack(gray, 80, 0.01, 10)
corners = np.int32(corners)

for corner in corners:
    x, y = corner[0]
    cv2.circle(img, (x, y), 5, (0, 0, 255), 1, cv2.LINE_AA)

img_re = cv2.resize(img, dsize=(0, 0), fx=0.3, fy=0.3, interpolation=cv2.INTER_LINEAR)

# 해리스 코너와 비교하기 위한  이미지
gray = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
corner = cv2.cornerHarris(gray, 2, 3, 0.04)
coord = np.where(corner > 0.1 * corner.max())
coord = np.stack((coord[1], coord[0]), axis=-1)     # axis=-1: 수평으로 쌓음

for x, y in coord:
    cv2.circle(img2, (x, y), 5, (0, 0, 255), 1, cv2.LINE_AA)     # 급격히 변화가 생기는 코너 표시

merged = np.hstack((img, img2))
merged_re = cv2.resize(merged, dsize=(0, 0), fx=0.3, fy=0.3, interpolation=cv2.INTER_LINEAR)


# cv2.imshow('Corners', img_re)
cv2.imshow('merged', merged_re)

cv2.waitKey()
cv2.destroyAllWindows()


