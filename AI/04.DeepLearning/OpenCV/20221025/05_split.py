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

src = cv2.imread("../images/tomato.jpg", cv2.IMREAD_COLOR)
# hsv = cv2.cvtColor(src, cv2.COLOR_BGR2HSV)
# h, s, v = cv2.split(hsv)

# img_show(['origin', 'hsv', 'h', 's', 'v'], [src, hsv, h, s, v], (4, 12))

rgb = cv2.cvtColor(src, cv2.COLOR_BGR2RGB)
r, g, b = cv2.split(rgb)

img_show(['origin', 'rgb', 'r', 'g', 'b'], [src, rgb, r, g, b], (4, 12))

cv2.waitKey()
cv2.destroyAllWindows()