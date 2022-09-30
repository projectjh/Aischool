from urllib.request import urlopen
from bs4 import BeautifulSoup
import csv
import sqlite3

def getSearchResult(search_day, artists, artistRank, titles, titleRank):
    url = urlopen("http://music.bugs.co.kr/chart/track/day/total?chartdate=" + search_day)
    soup = BeautifulSoup(url, "html.parser", from_encoding="utf8")

    try:
        for link1 in soup.find_all(name="p", attrs={"class": "artist"}):
            try:
                artist = link1.find('a').text
                artists.append(artist)
                artistRank += 1
            except AttributeError as artistError:   # 누락된 데이터로인해 개수가 맞지 않을 경우 예외처리
                artist = 'N/A'
                artists.append(artist)
                artistRank += 1

        for link2 in soup.find_all(name="p", attrs={"class": "title"}):
            try:
                title = link2.find('a').text
                titles.append(title)
                titleRank += 1
            except AttributeError as titleError:
                title = 'N/A'
                titles.append(title)
                titleRank += 1

    except AttributeError as e:     # p태그 자체가 존재하지 않을 경우, 데이터가 없는 것으로 여기고 에러 출력
        print(search_day + "의 데이터가 존재하지 않습니다.")

    except IndexError as index:     # 웹페이지 자체 에러로 Top100곡 개수가 100개가 되지 않으면 인덱스 에러 출력
        print('인덱스 에러' + ' / 아티스트 리스트 길이: ' + str(len(artists)) + ' / 곡 리스트 길이: ' + str(len(titles)))

def save_csv(search_day, artists, titles):
    f = open('bugschart_answer_%s.csv' % (search_day), 'wt', encoding='utf-8', newline='')
    wr = csv.writer(f, delimiter=",", quotechar='"', quoting=csv.QUOTE_ALL)
    for i in range(0, 100):
        wr.writerow((search_day, str(i+1), artists[i], titles[i]))

    f.close()

def save_sqliteDB(search_day, artists, titles):
    dbconn = sqlite3.connect('bugs_answer.db')
    dbcursor = dbconn.cursor()

    dbcursor.execute("drop table if exists bugs_answer")
    dbcursor.execute("""create table bugs_answer(
                        searchday text,
                        rank integer,
                        artist text,
                        title text)""")

    sql = "insert into bugs_answer values (?,?,?,?)"       # 튜플 형식으로 데이터 전달
    # db에 저장할때 튜플로 사용할지, 딕셔너리로 사용할지는 설계자 마음
    for i in range(100):
        try:
            dbcursor.execute(sql, (search_day, i+1, artists[i], titles[i]))
        except:
            print('DB SAVED ERROR')

    dbconn.commit()
    dbcursor.close()
    dbconn.close()

if __name__ == "__main__":
    # 아래 4가지 변수는 global 변수이므로 굳이 파라미터로 전달하지 않아도 되며, 객체형식은 따로 return값을 받지않아도 된다
    artists = []     # 1위~100위에 등록된 가수 목록
    artistRank = 0
    titles = []     # 1위~100위에 등록된 제목 목록
    titleRank = 0

    search_day = input("순위를 검색할 날짜를 8자리로 입력하세요(ex: 20060922~어제날짜): ")
    getSearchResult(search_day, artists, artistRank, titles, titleRank)
    save_csv(search_day, artists, titles)
    save_sqliteDB(search_day, artists, titles)
    # print(artists)
    # print(titles)
