import numpy as np, cv2
import matplotlib.pylab as plt

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

img = cv2.imread("../images/yeosu.jpg")
mask = np.zeros_like(img)
cv2.circle(mask, (500, 410), 200, (255, 255, 255), -1)
# cv2.circle(대상이미지, (원점x, 원점y), 반지름, (색상), 찿우기)
masked = cv2.bitwise_and(img, mask)     # 검정 부분은 다 0이므로 and연산에서 0은 연산이 이뤄지지 않음

img_show(['original', 'mask', 'masked'], [img, mask, masked], (12, 4))
cv2.waitKey()
cv2.destroyAllWindows()
