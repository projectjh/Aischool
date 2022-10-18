import csv
import urllib.request
import datetime
import json
import sqlite3
import re   # 정규표현식 삽입을 위한 re
from config import *

# [CODE 1] 네이버 API 연결후
def get_request_url(url):
    req = urllib.request.Request(url)
    req.add_header("X-Naver-Client-Id", client_id)
    req.add_header("X-Naver-Client-Secret", client_secret)

    try:
        response = urllib.request.urlopen(req)
        if response.getcode() == 200:
            print("[%s] Url Request Sucess" % datetime.datetime.now())
            return response.read().decode('utf-8')
    except Exception as e:
        print(e)
        print("[%s] Error for URL : %s" % (datetime.datetime.now(), url))
        return None

# [CODE 2] URL과 파라미터 가져오기
def getNaverSearchResult(sNode, search_text, page_start, display):
    base = "https://openapi.naver.com/v1/search"
    node = "/%s.json" % sNode
    parameters = "?query=%s&start=%s&display=%s" % (urllib.parse.quote(search_text), page_start, display)
    url = base + node + parameters

    retData = get_request_url(url)
    if (retData == None):
        return None
    else:
        return json.loads(retData)

# [CODE 3] 블로그 ITEM 내용 추출
def getPostData(post, jsonResult):
    title = post['title']
    description = post['description']
    bloggerlink = post['bloggerlink']
    link = post['link']
    postdate = post['postdate']
    bloggername = post['bloggername']

    jsonResult.append({'title': title, 'description': description, 'bloggerlink': bloggerlink, 'link': link, 'postdate': postdate, 'bloggername': bloggername})
    return

# [CODE 4] CSV파일 만들어 저장
def save_csv(jsonResult, sNode, search_text):
    # print('jsonResult => ', jsonResult)
    with open('%s_naver_%s.csv' % (search_text, sNode), 'w', encoding='utf-8', newline='') as f:
        wr = csv.writer(f, delimiter=",", quotechar='"', quoting=csv.QUOTE_ALL)
        wr.writerow(('title', 'description', 'bloggerlink', 'link', 'postdate', 'bloggername'))
        for row in jsonResult:
            wr.writerow((row['title'], row['description'], row['bloggerlink'], row['link'], row['postdate'], row['bloggername']))

    print('%s_naver_%s.csv SAVED' % (search_text, sNode))


# [CODE 5] sqlite 저장
def save_sqliteDB(jsonResult):
    dbconn = sqlite3.connect('naver.db')
    dbcursor = dbconn.cursor()

    dbcursor.execute("drop table if exists naver_blog")     # 네이버 블로그라는 테이블이 존재하면 삭제
    dbcursor.execute("""create table naver_blog (
                        id integer primary key autoincrement,
                        title text,
                        bloggername text,
                        description text,
                        bloggerlink text,
                        link text,
                        postdate text)""")

    sql = """insert into naver_blog values (null, :title, :bloggername, :description, :bloggerlink, :link, :postdate)"""
    # 전달할 정보가 딕셔너리이므로 이렇게 전달

    for rec in jsonResult:
        # rec에 딕셔너리객체 저장
        try:
            dbcursor.execute(sql, rec)  # key이름을 찾아서 매핑하여 데이터 전달
        except:     # 데이터 중 encoding 오류 데이터 처리
            for reckey in rec:
                rec[reckey] = re.sub('[^가-힝0-9a-zA-Z<>$.?:/#\[\]\\s]', ' ', rec[reckey])    # db에서 모든 데이터 처리가 불가능하지만 처리 가능한 데이터 중 오류발생을 방지하기 위해

            dbcursor.execute(sql, rec)  # 수정된 데이터를 DB에 저장

    dbconn.commit()
    dbcursor.close()
    dbconn.close()
    print("sqlite DB SAVED")


def main():
    jsonResult = []
    # 'news', 'blog', 'cafearticle'
    sNode = 'blog'
    # search_text = '코로나'
    search_text = input("검색할 내용을 입력해주세요: ")
    display_count = 10  # 한 번에 읽어올 기사(레코드) 수
    jsonSearch = getNaverSearchResult(sNode, search_text, 1, display_count)
    print("jsonSearch =", jsonSearch)

    while ((jsonSearch != None) and (jsonSearch['display'] != 0)):
        for post in jsonSearch['items']:
            getPostData(post, jsonResult)

        nStart = jsonSearch['start'] + jsonSearch['display']
        if (nStart > 100):
            break

        jsonSearch = getNaverSearchResult(sNode, search_text, nStart, display_count)

    with open('%s_naver_%s.json' % (search_text, sNode), 'w', encoding='utf8') as outfile:
        retJson = json.dumps(jsonResult, indent=4, sort_keys=True, ensure_ascii=False)
        # ensure_ascii가 True이면, ascii가 아닌 다른 문자들은 모두 이스케이프 문자로 표현된다.
        # 이스케이프 문자 : 이스케이프 시퀀스를 따르며, 백슬래시로부터 시작하는 문자

        outfile.write(retJson)

    print('%s_naver_%s.json SAVED' % (search_text, sNode))
    save_csv(jsonResult, sNode, search_text)
    save_sqliteDB(jsonResult)


if __name__ == "__main__":
    main()

