import cv2
import numpy as np
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


alpha = 0.5
img1 = cv2.imread("../images/wing_wall.jpg")
img2 = cv2.imread("../images/yate.jpg")
print(img1.shape, img2.shape)

blended = img1 * alpha + img2 * (1 - alpha)     # 이미지 크기가 맞아야 연산 가능
blended = blended.astype(np.uint8)  # uint8 => unsigned int 8bit 부호 없는 8비트 인수

dst = cv2.addWeighted(img1, alpha, img2, (1-alpha), 0)

'''
*** cv2.addWeight(img1, alpha, img2, beta, gamma)
- img1, img2: 합성할 두 이미지
- alpha: img1에 지정할 가중치(알파 값)
- beta: img2에 지정할 가중치, 흔히 (1-alpha) 적용
- gamma: 연산 결과에 가감할 상수, 흔히 0 적용
'''

img_show(['img1', 'img2', 'blended', 'addWeighted'], [img1, img2, blended, dst], (12, 4))

cv2.waitKey(0)
cv2.destroyAllWindows()