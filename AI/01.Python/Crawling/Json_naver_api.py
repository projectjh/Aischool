# 네이버 검색 API 예제 - 블로그 검색
import os
import sys
import urllib.request
import json


JSON_DATA = {}
str = ''

def read_json():
    global str
    client_id = "NOt2yyw4Gn6Y5gvyBB8T"
    client_secret = "unzLll0HB9"
    str = "코로나"
    encText = urllib.parse.quote(str)
    url = "https://openapi.naver.com/v1/search/blog?query=" + encText  # JSON 결과
    # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # XML 결과
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()
    if(rescode==200):
        # response_body = response.read()
        response_body = response.read().decode('utf-8')
        # print(url)
        # print(response_body.decode('utf-8'))
        return response_body
    else:
        print("Error Code:" + rescode)

def proc_json():
    global JSON_DATA
    # JSON_DATA = read_json()
    # data_json = json.loads(JSON_DATA)

    JSON_DATA = json.loads(read_json())['items'][0:]
    # data = JSON_DATA['items'][0:]
    print(JSON_DATA)

    # for i in range(len(JSON_DATA['items'])):
    #     bloggerlink = JSON_DATA['items'][i]['bloggerlink']
    #     bloggername = JSON_DATA['items'][i]['bloggername']
    #     description = JSON_DATA['items'][i]['description']
    #     link = JSON_DATA['items'][i]['link']
    #     postdate = JSON_DATA['items'][i]['postdate']
    #     title = JSON_DATA['items'][i]['title']
    #
    #     print(bloggerlink, bloggername, description, link, postdate, title)
    fp = open(str+"_naver_blog.json", "at")
    fp.write(JSON_DATA)
    fp.close()


if __name__=="__main__":
    # read_json()
    proc_json()