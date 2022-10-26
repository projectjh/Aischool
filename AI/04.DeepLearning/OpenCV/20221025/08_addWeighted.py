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

src = cv2.imread("../images/tomato.jpg", cv2.IMREAD_COLOR)
hsv = cv2.cvtColor(src, cv2.COLOR_BGR2HSV)
h, s, v = cv2.split(hsv)

lower_red = cv2.inRange(hsv, (0, 100, 100), (5, 255, 255))  # 채도 범위 0~5
upper_red = cv2.inRange(hsv, (170, 100, 100), (180, 255, 255))  # 채도 범위 170~179
added_red = cv2.addWeighted(lower_red, 1.0, upper_red, 1.0, 0.0)
blue = cv2.inRange(hsv, (110, 100, 100), (130, 255, 255))

red = cv2.bitwise_and(hsv, hsv, mask=added_red)
red = cv2.cvtColor(red, cv2.COLOR_HSV2BGR)

blue = cv2.bitwise_and(hsv, hsv, mask=blue)
blue = cv2.cvtColor(blue, cv2.COLOR_HSV2BGR)

img_show(['src', 'red', 'blue'], [src, red, blue], (8, 4))

cv2.waitKey()
cv2.destroyAllWindows()