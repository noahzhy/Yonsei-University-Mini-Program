import requests
import time
import csv
import os
from bs4 import BeautifulSoup


filename = 'post_db.csv'
fieldHeader = ['id','code','name','prof','type','rate','notice']


session = requests.Session()
headers = {'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'}
session.headers.update(headers)


def login():
    postdata = {'userid': 'noahzhang',
                'password': 'noahzhang0',
                'redirect': '/'}
    url = 'https://everytime.kr/user/login'

    session.get(url,data=postdata)


def post(year,semester,start):
    postdata = {'campusId': '6',
                'year': str(year),
                'semester': str(semester),
                'limitNum': '50',
                'startNum': str(start)}

    url = 'https://everytime.kr/find/timetable/subject/list'
    r = session.get(url,data=postdata)

    return r.text


def init_db(f,h):
    if(os.path.isfile(f)):
        pass
    else:
        with open(f, 'w',encoding='utf-8-sig',newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=h)
            writer.writeheader()


def main(y,s):
    login()
    p_name = ''
    p_prof = ''
    start = 0

    n_count = 0

    init_db(filename,fieldHeader)

    csvFile = open(filename,'w',encoding='utf-8-sig',newline='')
    writer = csv.writer(csvFile)
    writer.writerow(fieldHeader)

    while True:
        wbdata = post(y,s,start)
        print(start)
        soup = BeautifulSoup(wbdata,'lxml')
        n_subject = soup.select("subject")

        # if (len(n_subject) <= 0) or (n_count >= 2):
        if (len(n_subject) <= 0):
            print("debug!!!!!!!")
            break
        else:
            start += 50
            n_count += 1
    
        for n in n_subject:
            id = n.get("id")
            code = n.get("code")
            if len(code)>8:
                code = code.split('-')[0]+'-'+code.split('-')[1]
            name = n.get("name")
            professor = n.get("professor")
            type = n.get("type")
            rate = str(n.get("lecturerate"))
            notice = n.get("notice")

            # if True:
            if ((p_name == name) and (p_prof == professor)):
                pass
            else:
                data = {
                    'Id':id,
                    'Code':code,
                    'Name':name,
                    'Professor':professor,
                    'Type':type,
                    'Rate':rate,
                    'Notice':notice
                }

                # print(data)

                d1 = [  id,
                        code,
                        name,
                        professor,
                        type,
                        rate,
                        notice]
                writer.writerow(d1)

            p_name = name
            p_prof = professor

        time.sleep(5)

    csvFile.close()


main(2019,1)