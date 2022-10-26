# pip install imutils 설치
import cv2
import imutils
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

def print_image_info(image):
    print("이미지 사이즈: {}".format(image.shape))
    print("이미지 dtype: {}".format(image.dtype))
    print("이미지 Height: {}".format(image.shape[0]))
    print("이미지 Width: {}".format(image.shape[1]))
    print("이미지 전체 픽셀 개수: {}".format(image.size))

cv2_image = cv2.imread('../images/cat.jpg', cv2.IMREAD_COLOR)
print_image_info(cv2_image)
# img_show(['Original'], [cv2_image])
# cv2.imshow('Original', cv2_image)
print("-----------------------------------------------------")

width = 200
aspect_ratio = float(width) / cv2_image.shape[1]
dsize = (width, int(cv2_image.shape[0] * aspect_ratio))
resized = cv2.resize(cv2_image, dsize, interpolation=cv2.INTER_AREA)
print_image_info(resized)
# img_show("Resized (Width)", resized)
# cv2.imshow("Resized (Width)", resized)
print("-----------------------------------------------------")

height = 100
aspect_ratio = float(height) / cv2_image.shape[0]
dsize = (int(cv2_image.shape[1] * aspect_ratio), height)
resized = cv2.resize(cv2_image, dsize, interpolation=cv2.INTER_AREA)
print_image_info(resized)
# img_show("Resized (Height)", resized)
# cv2.imshow("Resized (Height)", resized)
print("-----------------------------------------------------")

resized = imutils.resize(cv2_image, width=100)      # imutils(): 한쪽 사이즈만 잡아주면 자동으로 비율로 조정해줌
print_image_info(resized)
# img_show("Resized via imutils", resized)
# cv2.imshow("Resized via imutils", resized)

methods = [("cv2.INTER_NEAREST", cv2.INTER_NEAREST),
           ("cv2.INTER_LINEAR", cv2.INTER_LINEAR),
           ("cv2.INTER_AREA", cv2.INTER_AREA),
           ("cv2.INTER_CUBIC", cv2.INTER_CUBIC),
           ("cv2.INTER_LANCZOS4", cv2.INTER_LANCZOS4)]

image_label = []
image_list = []

for (name, method) in methods:
    image_label.append(name)
    resized = imutils.resize(cv2_image, width=cv2_image.shape[1] * 2, inter=method)
    image_list.append(resized)
    cv2.imshow(str(method), resized)

img_show(image_label, image_list, figsize=(16,10))
