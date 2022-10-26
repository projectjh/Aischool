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

img_color = cv2.imread("../images/Billiard.jpg", cv2.IMREAD_COLOR)
img_b, img_g, img_r = cv2.split(img_color)

zeros = np.zeros((img_color.shape[0], img_color.shape[1]), dtype="uint8")
img_b1 = cv2.merge([img_b, zeros, zeros])
img_g1 = cv2.merge([zeros, img_g, zeros])
img_r1 = cv2.merge([zeros, zeros, img_r])
img_rgb = cv2.merge([img_r, img_g, img_b])

img_show(['origin', 'b', 'g', 'r', 'rgb'], [img_color, img_b1, img_g1, img_r1, img_rgb], (12, 4))

cv2.waitKey()
cv2.destroyAllWindows()