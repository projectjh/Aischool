# 이미지 비교 라이브러리
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

src = cv2.imread("../images/cat.jpg", cv2.IMREAD_COLOR)
dst = cv2.flip(src, 0)  # 상하 대칭
dst1 = cv2.flip(src, -1)  # 상하좌우 대칭
dst2 = cv2.flip(src, 1)  # 좌우 대칭

# cv2.imshow("src", src)
# cv2.imshow("dst", dst)
# => 위 두문장 대신 사용할 문장
img_show(["src", "dst", "dst1", "dst2"], [src, dst, dst1, dst2], figsize=(12, 5))
# 출력할 이미지가 여러개일때 리스트로 만들어 전달
# 타이틀, 출력할 실제 이미지, 사이즈(생략시 default값 적용)

cv2.waitKey()
cv2.destroyAllWindows()