import csv, urllib.request, datetime
from bs4 import BeautifulSoup
from config import *

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


def getNaverSearchResult(sNode, search_text, page_start, display):
    base = "https://openapi.naver.com/vi/search"
    node = "/%s.xml" % sNode
    parameters = "?query=%s&start=%s&display=%s" % (urllib.parse.quote(search_text), page_start, display)
    url = base + node + parameters

    retData = get_request_url(url)
    soup = BeautifulSoup(retData, "html.parser")
    if (retData == None):
        return None
    else:
        print("soup =>", soup)
        return soup


def getPostData(post, xmlResult):
    print(xmlResult)

    # title =


def main():
    xmlResult = []
    sNode = 'blog'
    search_text = input("검색할 내용을 입력해주세요: ")
    display_count = 10
    xmlSearch = getNaverSearchResult(sNode, search_text, 1, display_count)
    print("xmlSearch =", xmlSearch)

    # while ((xmlSearch != None) and (xmlSearch['display'] != 0)):
    #     for post in xmlSearch['items']:
    #         getPostData(post, xmlResult)
    #
    #     nStart = xmlSearch['start'] + xmlSearch['display']
    #     if (nStart > 100):
    #         break
    #
    #     xmlSearch = getNaverSearchResult(sNode, search_text, nStart, display_count)

    # with open('%s_naver_%s.xml' % (search_text, sNode), 'w', encoding='utf-8') as outfile:
    #     retXml = BeautifulSoup(xmlResult, "html.parser")
    #     outfile.write(retXml)
    #
    # print('%s_naver_%s.xml SAVED' % (search_text, sNode))

if __name__ == "__main__":
    main()
