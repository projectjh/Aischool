import cv2

src = cv2.imread("../images/song_1.jpg", cv2.IMREAD_COLOR)
height, width, channel = src.shape
dst_pyrUp = cv2.pyrUp(src, dstsize=(width*2, height*2), borderType=cv2.BORDER_DEFAULT)
dst_pyrDown = cv2.pyrDown(src)

# img_show(["src", "dst_pyrUp", "dst_pryDown"], [src, dst_pyrUp, dst_pyrDwon], (12, 4))
cv2.imshow("src", src)
cv2.imshow("pyrUp", dst_pyrUp)
cv2.imshow("pyrDown", dst_pyrDown)
print(src.shape, dst_pyrUp.shape, dst_pyrDown.shape)

cv2.waitKey()
cv2.destroyAllWindows()