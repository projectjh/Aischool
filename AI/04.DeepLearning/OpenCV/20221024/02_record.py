import cv2

cap = cv2.VideoCapture(0)

if cap.isOpened:    # True/False
    file_path = 'record.avi'
    fps = 30.0
    fourcc = cv2.VideoWriter_fourcc(*'DIVX')
    width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
    height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)
    size = (int(width), int(height))
    out = cv2.VideoWriter(file_path, fourcc, fps, size)

    while True:
        ret, frame = cap.read()
        if ret:     # True/False
            cv2.imshow('camera-recording', frame)
            out.write(frame)

            if cv2.waitKey(int(1000/fps)) != -1:   # 33ms 정도 기다리겠다는 의미
                break

        else:
            print("no frame!")
            break

    out.release()   # out객체 닫음

else:
    print("can't open camera!")

cap.release()
cv2.destroyAllWindows()