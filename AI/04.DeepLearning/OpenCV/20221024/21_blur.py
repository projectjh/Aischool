import cv2
import matplotlib.pyplot as plt

image = cv2.imread('../images/Lenna.png')

def plotFigures(original_image, blurred_image, title):
    plt.figure(figsize=(10,5))
    plt.subplot(121)
    plt.imshow(cv2.cvtColor(original_image, cv2.COLOR_BGR2RGB))
    plt.title("Original")
    plt.xticks([]), plt.yticks([])

    plt.subplot(122)
    plt.imshow(cv2.cvtColor(blurred_image, cv2.COLOR_BGR2RGB))
    plt.title(title)
    plt.xticks([]), plt.yticks([])
    plt.show()

blur = cv2.blur(image, (5, 5))
plotFigures(image, blur, "cv2.blur()")

gaussian = cv2.GaussianBlur(image, (15, 15), 0)
plotFigures(image, gaussian, "cv2.GaussianBlur()")