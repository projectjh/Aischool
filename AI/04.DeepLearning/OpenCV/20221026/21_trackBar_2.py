import cv2

win_name = 'Alpha blending'
trackbar_name = 'fade'

def onChange(x):
    alpha = x / 100
    dst = cv2.addWeighted(img1, 1-alpha, img2, alpha, 0)
    cv2.imshow(win_name, dst)

img1 = cv2.imread("../images/man_face.jpg")
img2 = cv2.imread("../images/lion_face.jpg")

cv2.imshow(win_name, img1)
cv2.createTrackbar(trackbar_name, win_name, 0, 100, onChange)

cv2.waitKey(0)
cv2.destroyAllWindows()
