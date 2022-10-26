import cv2
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

src = cv2.imread("../images/office.jpg")
kernel = cv2.getStructuringElement(cv2.MORPH_CROSS, (9, 9))
dst = cv2.morphologyEx(src, cv2.MORPH_OPEN, kernel, iterations=1)

src_re = cv2.resize(src, dsize=(0, 0), fx=0.4, fy=0.4, interpolation=cv2.INTER_LINEAR)
dst_re = cv2.resize(dst, dsize=(0, 0), fx=0.4, fy=0.4, interpolation=cv2.INTER_LINEAR)

# cv2.imshow("dst", dst_re)
img_show(['original', 'open'], [src_re, dst_re])

cv2.waitKey(0)
cv2.destroyAllWindows()
