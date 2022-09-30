# 2022-09-22 naver api 활용하여 json파일 만든 내용에 csv파일 만드는 내용 추가
import csv
import urllib.request
import datetime
import json

import csv_writer
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
    return post

def main():
    jsonResult = []
    # 'news', 'blog', 'cafearticle'
    sNode = 'blog'
    search_text = '코로나'
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

def makeCsv():
    jsonResult = []
    sNode = 'blog'
    search_text = '코로나'
    display_count = 10  # 한 번에 읽어올 기사(레코드) 수
    jsonSearch = getNaverSearchResult(sNode, search_text, 1, display_count)
    # print(jsonSearch['items'][0].keys())
    csv_title = jsonSearch['items'][0].keys()
    csv_content = jsonSearch['items'][0].values()

    while ((jsonSearch != None) and (jsonSearch['display'] != 0)):
        for post in jsonSearch['items']:
            getPostData(post, jsonResult)

        nStart = jsonSearch['start'] + jsonSearch['display']
        if (nStart > 100):
            break

        jsonSearch = getNaverSearchResult(sNode, search_text, nStart, display_count)

    with open('%s_naver_%s.csv' % (search_text, sNode), 'w', encoding='utf8') as csv_f:
        naver_csv = csv.writer(csv_f, delimiter=",", quotechar='"', quoting=csv.QUOTE_ALL)
        naver_csv.writerow(csv_title)
        naver_csv.writerow(csv_content)

    print('%s_naver_%s.csv SAVED' % (search_text, sNode))

if __name__ == "__main__":
    main()
    makeCsv()

