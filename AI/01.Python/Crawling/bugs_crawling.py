# 벅스 차트를 가져와서 날짜를 입력받아 해당 날짜의 차트를 csv파일과 db에 저장
# 검색날짜, 순위, 가수명, 곡명 변수 저장

import csv, sqlite3, re, urllib.request
from bs4 import BeautifulSoup

def get_bugs(searchDate):
    # https://music.bugs.co.kr/chart/track/day/total?chartdate=20220920
    base = "https://music.bugs.co.kr/chart/track/day/total"
    parameters = "?chartdate=%s" % (searchDate)
    url = base + parameters
    # print('url', url)
    response = urllib.request.urlopen(url)
    # print('response =>', response)
    if response == None:
        return None
    else:
        return response


def getPostData(post, bugsResult):
    print(post)
    date = post['date']
    rank = post['rank']
    title = post['title']
    artist = post['artist']

    bugsResult.append({'date': date, 'rank': rank, 'title': title, 'artist': artist})
    return


def save_csv(bugsResult, searchDate):
    with open("bugs_chart_%s.csv" % (searchDate), 'w', encoding='utf-8', newline='') as f:
        wr = csv.writer(f, delimiter=",", quotechar='"', quoting=csv.QUOTE_ALL)
        for row in bugsResult:
            wr.writerow((row['date'], row['rank'], row['title'], row['artist']))

    print('bugs_chart_%s.csv SAVED' % searchDate)


def save_sqliteDB(bugsResult):
    dbconn = sqlite3.connect('bugs_chart.db')
    dbcursor = dbconn.cursor()

    dbcursor.execute("drop table if exist bugs_chart")
    dbcursor.execute("""create table bugs_chart (
                        searchDate text,
                        rank integer primary key,
                        title text,
                        artist text)""")

    sql = """insert into bugs_chart values (:date, :rank, :title, :artist)"""

    for rec in bugsResult:
        try:
            dbcursor.execute(sql, rec)
        except:
            for reckey in rec:
                rec[reckey] = re.sub('[^가-힝0-9a-zA-Z<>$.?:/#\[\]\\s]', ' ', rec[reckey])

            dbcursor.execute(sql, rec)

    dbconn.commit()
    print('sqliteDB SAVED')
    dbcursor.close()
    dbconn.close()


def main():
    bugsResult = []
    searchDate = input("순위를 검색할 날짜를 입력해주세요: ")
    bugsSearch = get_bugs(searchDate)

    soup = BeautifulSoup(bugsSearch, "html.parser")
    # print('soup title =>', soup.find('tr').find_all_next2(class_="title"))

    while bugsSearch != None:
        data = {}
        for item in soup.findAll('tr'):
            data["date"] = searchDate
            ranking = item.find(class_="ranking").find('strong')
            data["rank"] = str(ranking).replace('<strong>', '').replace('</strong>', '')
            data["title"] = item.find(class_="title").get_text().replace('\n', '')
            data["artist"] = item.find(class_="artist").get_text().replace('\n', '')
            # print(rank, title, artist)
            getPostData(data, bugsResult)

    # save_csv(bugsResult, searchDate)
    # save_sqliteDB(bugsResult)

if __name__ == "__main__":
    main()
