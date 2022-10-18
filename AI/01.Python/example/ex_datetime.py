from datetime import timedelta, timezone, date, time, datetime

# print(timedelta(days=7, hours=17, minutes=30))
# print(timezone(timedelta(hours=9)))
# print(date(2022, 9, 19))

# print(date.today())
# today = date(2022,10,1)
# print(today.year)
# print(today.month)
# print(today.day)
# print(today.isoformat())

# today = date.today()
# print(today.isoformat())
# print(date.fromisoformat('2022-09-19'))
# print(today.weekday())                      # 월요일 = 0
# print(today.isoweekday())                   # 월요일 = 1
# print(today.replace(year=2010))

# print(time(13, 42, 35))
# print(time.fromisoformat('13:42:35.458+09:00'))
# t = time(13, 42, 35, 458000, tzinfo=timezone(timedelta(hours=9)))
# print(t.isoformat())
# print(t.hour)
# print(t.minute)
# print(t.second)
# print(t.microsecond)
# print(t.replace(hour=14))

# date와 time을 함께 쓸 수 있는 모듈이 datetime
print(datetime(2020, 7, 18, 13, 26, 23))

d = date(2020, 7, 18)
t = time(13, 26, 23)
print(datetime.combine(d, t))
print(datetime.now())
print(datetime.now().strftime('%Y/%m/%d'))
print(datetime.strptime('2020/07/18', '%Y/%m/%d'))