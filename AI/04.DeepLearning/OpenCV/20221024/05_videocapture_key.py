import datetime
import cv2

capture = cv2.VideoCapture("../images/youquiz4.mp4")
fourcc = cv2.VideoWriter_fourcc(*'XVID')
record = False

while True:
    if (capture.get(cv2.CAP_PROP_POS_FRAMES) == capture.get(cv2.CAP_PROP_FRAME_COUNT)):
        capture.open("../images/youquiz4.mp4")

    ret, frame = capture.read()
    cv2.imshow("VideoFrame", frame)
    now = datetime.datetime.now().strftime("%d_%H_%M_%S")
    key = cv2.waitKey(33)
    print("key =>", key)
    # 27: ESC / 49: 숫자1 / 50: 숫자2 / 51: 숫자3

    if key == 27:
        break       # while문을 빠져나옴 => 동영상 재생을 멈춤
    elif key == 49:
        print("캡처")
        cv2.imwrite("./capture/" + str(now) + ".png", frame)
    elif key == 50:
        print("녹화 시작")
        record = True
        video = cv2.VideoWriter("./capture/" + str(now) + ".avi", fourcc, 20.0, (frame.shape[1], frame.shape[0]))
    elif key == 51:
        print("녹화 중지")
        record = False
        video.release()

    if record == True:
        print("녹화 중..")
        video.write(frame)

capture.release()
cv2.destroyAllWindows()