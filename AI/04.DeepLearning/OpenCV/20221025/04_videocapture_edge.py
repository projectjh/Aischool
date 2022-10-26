import cv2
import numpy as np

cap = cv2.VideoCapture(0)
while cap.isOpened():
    ret, frame = cap.read()
    frame = cv2.resize(frame, None, fx=0.8, fy=0.8, interpolation=cv2.INTER_AREA)

    if cv2.waitKey(1) == 27:    # ESC
        break

    img_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    img_gray = cv2.GaussianBlur(img_gray, (9, 9), 0)
    edges = cv2.Laplacian(img_gray, -1, None, 5)
    ret, sketch = cv2.threshold(edges, 70, 255, cv2.THRESH_BINARY_INV)  # 이진화 작업으로 이미지를 흑백으로 변경시켜줌

    sketch = cv2.medianBlur(sketch, 5)  # 중앙값을 이용해 블러처리하는 방법
    img_sketch = cv2.cvtColor(sketch, cv2.COLOR_GRAY2BGR)

    img_paint = cv2.blur(frame, (10, 10))
    img_paint = cv2.bitwise_and(img_paint, img_paint, mask=sketch)  # mask연산을 통해 컬러로 재변환

    merged = np.hstack((img_sketch, img_paint))
    cv2.imshow('Sketch Camera', merged)


cap.release()
cv2.destroyAllWindows()