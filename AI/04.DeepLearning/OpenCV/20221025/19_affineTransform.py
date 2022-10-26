import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread("../images/chessboard.jpg")
rows, cols, ch = img.shape

pts1 = np.float32([[200, 100], [400, 100], [200, 200]])
pts2 = np.float32([[200, 300], [400, 200], [200, 400]])

cv2.circle(img, (200, 100), 10, (255, 0, 0), -1)
cv2.circle(img, (400, 100), 10, (0, 255, 0), -1)
cv2.circle(img, (200, 200), 10, (0, 0, 255), -1)

M = cv2.getAffineTransform(pts1, pts2)      # 변환 전 좌표, 변환 후 좌표
print(M)    # 6개 행렬 출력
dst = cv2.warpAffine(img, M, (cols, rows))  # 6개 행렬을 가지고 실제 변환 작업 실행

plt.subplot(121)
plt.imshow(img)
plt.title('images')

plt.subplot(122)
plt.imshow(dst)
plt.title('Affine')
plt.show()
