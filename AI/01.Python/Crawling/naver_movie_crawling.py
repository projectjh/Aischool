from urllib.request import urlopen
from bs4 import BeautifulSoup
import csv, re
import sqlite3

def menu():
    print("\n *** 메뉴 *** ")
    print("1. 조회순")
    print("2. 평점순(현재 상영 영화)")
    print("3. 평점순(모든 영화)")
    print("4. 프로그램 종료")

def get_movie_cnt(searchDate, ranks, titles, points):
    # searchDate = input("조회할 날짜를 입력해주세요(ex: 20220920): ")
    url = urlopen("https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=cnt&date=%s" % searchDate)
    soup = BeautifulSoup(url, "html.parser", from_encoding="utf8")
    # print('url =>', soup)
    # points = []
    try:
        for data1 in soup.find_all('td' > 'img', attrs={"width": "14"}):
            rank = data1['alt']
            ranks.append(rank)
        for data2 in soup.find_all('td', attrs={"class": "title"}):
            # print('요고요고', data2.find_previous_sibling('td').contents)

            if data2.find_previous_sibling('td').contents != []:
                title = data2.find('a').text
                titles.append(title)
        save_csv(searchDate, ranks, titles, points)
        save_sqliteDB(searchDate, ranks, titles, points)
    except:
        print("Error")


def get_movie_cur(searchDate, ranks, titles, points):
    url = urlopen("https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=cur&date=%s" % searchDate)
    soup = BeautifulSoup(url, "html.parser", from_encoding="utf8")
    # print('url =>', soup)

    try:
        for data1 in soup.find_all('td' > 'img', attrs={"width": "14"}):
            rank = data1['alt']
            ranks.append(rank)
        for data2 in soup.find_all('td', attrs={"class": "title"}):
            if data2.find_previous_sibling('td').contents != []:
                title = data2.find('a').text
                titles.append(title)
        for data3 in soup.find_all('td', attrs={'class': 'point'}):
            point = data3.text
            points.append(point)

        save_csv(searchDate, ranks, titles, points)
        save_sqliteDB(searchDate, ranks, titles, points)
    except:
        print("Error")


def get_movie_pnt(searchDate, ranks, titles, points):
    page_start = int(input("검색 시작 페이지 번호 입력: "))
    page_end = int(input("검색 종료 페이지 번호 입력: "))
    # print(page_start, page_end)
    try:
        page = 0
        for i in range(page_start, page_end+1):
            page = i
            url = urlopen("https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=%s&page=%s" % (searchDate, page))
            soup = BeautifulSoup(url, "html.parser", from_encoding="utf8")

            for data2 in soup.find_all('td', attrs={"class": "title"}):
                if data2.find_previous_sibling('td').contents != []:
                    title = data2.find('a').text
                    titles.append(title)
            for data3 in soup.find_all('td', attrs={'class': 'point'}):
                point = data3.text
                points.append(point)

        for num in range(page_start * 50 - 49, page_end * 50 + 1):
            # print(num)
            ranks.append(num)
        # print(len(ranks))
        # print(type(len(ranks)))
        save_csv(searchDate, ranks, titles, points)
        save_sqliteDB(searchDate, ranks, titles, points)
    except:
        print("Error")


def save_csv(searchDate, ranks, titles, points):
    f = open('movie_chart_%s.csv' % searchDate, 'wt', encoding='utf-8', newline='')
    wr = csv.writer(f, delimiter=",", quotechar='"', quoting=csv.QUOTE_ALL)
    for i in range(0, len(ranks)):

        print(i)
        if points != []:
            wr.writerow((searchDate, ranks[i], titles[i], points[i]))
        else:
            wr.writerow((searchDate, ranks[i], titles[i]))

    f.close()
    print('movie_chart_%s.csv SAVED' % searchDate)


def save_sqliteDB(searchDate, ranks, titles, points):
    dbconn = sqlite3.connect('movie_chart.db')
    dbcursor = dbconn.cursor()

    dbcursor.execute("drop table if exists movie_chart")
    dbcursor.execute("""create table movie_chart(
                        searchDate text,
                        rank integer,
                        titles text,
                        point real)""")

    sql = "insert into movie_chart values (?, ?, ?, ?)"
    for i in range(0, len(ranks)+1):
        try:
            if points != []:
                dbcursor.execute(sql, (searchDate, ranks[i], titles[i], points[i]))
            else:
                dbcursor.execute(sql, (searchDate, ranks[i], titles[i], ''))
        except:
            print('DB SAVED ERROR')

    dbconn.commit()
    dbcursor.close()
    dbconn.close()

    print('movie_chart_%s.db SAVED' % searchDate)


if __name__ == "__main__":
    ranks = []
    titles = []
    points = []
    while True:
        menu()
        num = input("\n메뉴를 선택하세요: ")

        if num == "1":
            searchDate = input("조회할 날짜를 입력해주세요(ex: 20220920): ")
            get_movie_cnt(searchDate, ranks, titles, points)
            # print(len(ranks))
        elif num == "2":
            searchDate = input("조회할 날짜를 입력해주세요(ex: 20220920): ")
            get_movie_cur(searchDate, ranks, titles, points)
        elif num == "3":
            searchDate = input("조회할 날짜를 입력해주세요(ex: 20220920): ")
            get_movie_pnt(searchDate, ranks, titles, points)
        elif num == "4":
            print("\n프로그램 종료...")
            break
        else:
            print("\n메뉴를 다시 선책해주세요.")