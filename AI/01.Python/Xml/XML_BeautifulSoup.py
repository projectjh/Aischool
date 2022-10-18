# 설치 : pip install BeautifulSoup4 실행

from bs4 import BeautifulSoup
import urllib.request as MYURL

# jURL = "http://rss.joins.com/joins_news_list.xml"   # 중앙일보 기사 관련 XML 문서 => 서비스 종료 (html도 가능할 것임)
jURL = "http://myhome.chosun.com/rss/www_section_rss.xml"   # 조선일보 기사 관련 XML 문서
response = MYURL.urlopen(jURL)
soup = BeautifulSoup(response, "html.parser")

print(soup.prettify())
print('=========================================================================')
for item in soup.findAll("item"):
    print("title:", item.title.string)
    print("description:", item.description.string)
    print("pubdate:", item.pubdate.string)
    print("-------------------------------------------------------------------------")