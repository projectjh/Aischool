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

src = cv2.imread("../images/pencils.jpg")
number = np.ones_like(src) * 127

_max = cv2.max(src, number)
_min = cv2.min(src, number)
_abs = cv2.absdiff(src, number)     # src - number 값의 절대값
compare = cv2.compare(src, number, cv2.CMP_GT)  # CMP_GT(GRATER THAN) 비교 연산 => True=255, False=0

src = np.concatenate((src, src, src, src), axis=1)
number = np.concatenate((number, number, number, number), axis=1)
dst = np.concatenate((_max, _min, _abs, compare), axis=1)
dst = np.concatenate((src, number, dst), axis=0)

img_show("max / min / abs / compare", dst, (12, 6))

cv2.waitKey(0)
cv2.destroyAllWindows()
