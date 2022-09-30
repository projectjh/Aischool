# 참고 사이트 : https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.html
from bs4 import BeautifulSoup

fp = open("song.xml", "r")
soup = BeautifulSoup(fp, "html.parser")
print(soup.prettify())
print('------------------------------------------------')
for song in soup.find_all("song"):
    print(song['album'])
    print(song.title.string)
    print(song.length.string)
    print()
