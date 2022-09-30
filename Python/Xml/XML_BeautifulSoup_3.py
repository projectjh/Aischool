from bs4 import BeautifulSoup

fp = open("song.xml", "r", encoding="utf-8")
openFile = fp.read()
soup = BeautifulSoup(openFile, "html.parser")

for song in soup.findAll("song"):
    print(song['album'])
    print(song.title.string)
    print(song.length.string)
    print()
