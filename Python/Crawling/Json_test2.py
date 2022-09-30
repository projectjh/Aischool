import json     # json은 파이썬 설치시 기본 라이브러리로 설치됨

JSON_FILE = "./test.json"
JSON_DATA = {}

def read_json(filename):
    f = open(filename, 'rt')
    # f = open(filename, 'rt', encoding='utf-8')
    js = json.loads(f.read())    # f.read()를 통해 json파일을 문자열로 읽어옴, 이를 다시 딕셔너리 형식으로 js에 저장
    f.close()
    return js

def proc_json():
    global JSON_FILE
    global JSON_DATA
    JSON_DATA = read_json(JSON_FILE)


    repos = JSON_DATA['snapshot']['repos']
    userid = JSON_DATA['snapshot']['userid']
    pw = JSON_DATA['snapshot']['passwd']

    print("repos value: " + repos)
    print("userid value: " + userid)
    print("pw value: " + pw)

if __name__ == "__main__":
    proc_json()
