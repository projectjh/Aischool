import cv2
import numpy as np
import matplotlib.pylab as plt

img1 = cv2.imread("../images/wing_wall.jpg")
img2 = cv2.imread("../images/yate.jpg")

img3 = img1 + img2  # 실제 연산은 -1을 255로 변환
                    # ex) 250 + 15 = 1111 1010 + 0000 1111 = 0000 1001 => 9 어두운 색
img4 = cv2.add(img1, img2)  # add()는 음수는 0, 255보다 크면 255로 처리

imgs = {'img1': img1, 'img2': img2, 'img1+img2': img3, 'cv.add(img1, img2)': img4}

for i, (k, v) in enumerate(imgs.items()):
    plt.subplot(2, 2, i+1)
    plt.imshow(v[:, :, ::-1])
    plt.title(k)
    plt.xticks([])
    plt.yticks([])

plt.show()