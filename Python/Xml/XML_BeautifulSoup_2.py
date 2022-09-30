from bs4 import BeautifulSoup

xml_doc = """
    <rss>
        <channel>
            <my>
                <song album="a1">
                    <title>song1</title>
                    <length>3:50</length>
                </song>
                <song album="a2">
                    <title>song2</title>
                    <length>4:50</length>
                </song>
                <song album="a3">
                    <title>song3</title>
                    <length>2:40</length>
                </song>
            </my>
        </channel>
    </rss>
"""

soup = BeautifulSoup(xml_doc, "html.parser")

for song in soup.findAll("song"):
    print(song['album'])
    print(song.title.string)
    print(song.length.string)
    print()

print(soup.prettify())  # XML 문서를 그대로 읽어서 출력