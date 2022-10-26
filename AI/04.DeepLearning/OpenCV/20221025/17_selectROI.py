import cv2

img = cv2.imread("../images/sunset.jpg")
x, y, w, h = cv2.selectROI('img', img, False)

if w and h:
    roi = img[y: y+h, x: x+w]               # 지정 위치 슬라이싱
    cv2.imshow('cropped', roi)              # 슬라이싱한 이미지
    cv2.moveWindow('cropped', 0, 0)         # 슬라이싱 이미지 띄워주는 위치
    cv2.imwrite('./cropped2.jpg', roi)      # 슬라이싱 이미지 저장

cv2.waitKey(0)
cv2.destroyAllWindows()