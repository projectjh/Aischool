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
            plt.subplot(1, len(img), i + 1), plt.imshow(rgbImg)
            # plt.subplot(len(img), 1, i + 1), plt.imshow(rgbImg)
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

img = cv2.imread("../images/cat.jpg")
smaller = cv2.pyrDown(img)      # 축소
bigger = cv2.pyrUp(smaller)     # 축소 이미지를 확대
laplacian = cv2.subtract(img, bigger)
restored = bigger + laplacian   # 축소 후 확대한 이미지에 laplacian 저장시 원본이미지로 복원
merged = np.hstack((img, laplacian, bigger, restored))
# cv2.imshow("Laplacian Pyramid", merged)
cv2.imshow('img', img)
cv2.imshow('smaller', smaller)
cv2.imshow('bigger', bigger)
cv2.imshow('laplacian', laplacian)
cv2.imshow('restored', restored)
# img_show("Laplacian Pyramid", merged, (16, 4))

cv2.waitKey(0)
cv2.destroyAllWindows()