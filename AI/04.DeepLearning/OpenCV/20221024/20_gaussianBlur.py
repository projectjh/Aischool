import cv2

src = cv2.imread("../images/cat.jpg", cv2.IMREAD_COLOR)

for ksize in (3, 5, 7, 11):
    # dst = cv2.blur(src, (ksize, ksize), anchor=(-1, -1), borderType=cv2.BORDER_DEFAULT)
    dst = cv2.GaussianBlur(src, (ksize, ksize), 0)
    desc = 'Mean: {}x{}'.format(ksize, ksize)
    cv2.putText(dst, desc, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1.0, 255, 1, cv2.LINE_AA)    # putText(): 폰트 설정
    cv2.imshow("dst", dst)
    cv2.waitKey()

cv2.destroyAllWindows()


"""
▪ cv2.GaussianBlur(src, ksize, sigmaX, dst=None, sigmaY=None, borderType=None)
- src: 입력 이미지
- ksize: 가우시안 커널 크기
- sigmaX: X방향 sigma
- sigmaY: y방향 sigma. 0이면 sigmaX와 같게 설정
- borderType: 가장자리 픽셀 확장 방식
"""