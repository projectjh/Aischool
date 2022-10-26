import cv2
import numpy as np
import matplotlib.pyplot as plt

def img_show(title='image', img=None, figsize=(8,5)):
    plt.figure(figsize=figsize)

    # 출력할 이미지가 리스트일때
    if type(img) == list:
        if type(title) == list:
            titles = title
        else:
            titles = []

            for i in range(len(img)):
                titles.append(title)

        for i in range(len(img)):
            if len(img[i].shape) <= 2:
                rgbImg = cv2.cvtColor(img[i], cv2.COLOR_GRAY2RGB)
            else:
                rgbImg = cv2.cvtColor(img[i], cv2.COLOR_BGR2RGB)

            # 보여지는 구조 변경
            # plt.subplot(1, len(img), i + 1), plt.imshow(rgbImg)
            plt.subplot(len(img), 1, i + 1), plt.imshow(rgbImg)
            plt.title(titles[i])
            plt.xticks([]), plt.yticks([])

        plt.show()

    # 출력할 이미지가 리스트가 아닐때
    else:
        if len(img.shape) < 3:  # 이미지가 흑백일때 처리
            rgbImg = cv2.cvtColor(img, cv2.COLOR_GRAY2RGB)
        else:
            rgbImg = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)   # matplotlib은 rgb로 색상을 처리하기때문에 변환이 필요하다.

        plt.imshow(rgbImg)
        plt.title(title)
        plt.xticks([]), plt.yticks([])
        plt.show()

img1 = cv2.imread("../images/morph_dot.png", cv2.IMREAD_GRAYSCALE)
img2 = cv2.imread("../images/morph_hole.png", cv2.IMREAD_GRAYSCALE)

k = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))

opening = cv2.morphologyEx(img1, cv2.MORPH_OPEN, k)
closing = cv2.morphologyEx(img2, cv2.MORPH_CLOSE, k)

merged1 = np.hstack((img1, opening))
merged2 = np.hstack((img2, closing))

# cv2.imshow('opening', merged1)
# cv2.imshow('closing', merged2)
img_show(['opening', 'closing'], [merged1, merged2], (5, 8))

cv2.waitKey(0)
cv2.destroyAllWindows()
