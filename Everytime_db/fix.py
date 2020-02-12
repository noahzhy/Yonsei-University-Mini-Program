import os
import string
import csv


filename = 'YSU_post_db.csv'
filenameNew = 'YSU_post_db_new.csv'
fieldHeader = ['id','code','name','prof','type','rate','notice']

class course:
    def __init__(self):
        self.id = ''
        self.code = ''
        self.name = ''
        self.prof = ''
        self.type = ''
        self.rate = ''
        self.notice = ''


def get_info():
    row_sum = 0
    set_c = []
    with open(filename, 'r', encoding='UTF-8') as f:
        lines = csv.reader(f)
        row_sum = len(f.readlines()) -1
        if row_sum == 0:
            print('No more data.')
        else:
            f.seek(0,0)
            next(lines)
            for i in f.readlines():
                c = course()
                c.id = i.strip().split(',')[0]
                c.code = i.strip().split(',')[1]
                if len(c.code)<=8:
                    c.code = c.code.split('-')[0]+'-'+c.code.split('-')[1]
                else:
                    c.code = c.code.split('-')[0]
                c.name = i.strip().split(',')[2]
                c.prof = i.strip().split(',')[3]
                c.type = i.strip().split(',')[4]
                c.rate = i.strip().split(',')[5]
                c.notice = i.strip().split(',')[6]
                set_c.append(c)

    return set_c


def init_db(f,h):
    if(os.path.isfile(f)):
        pass
    else:
        with open(f, 'w',encoding='utf-8-sig',newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=h)
            writer.writeheader()


def main():
    init_db(filenameNew,fieldHeader)
    csvFile = open(filenameNew,'w',encoding='utf-8-sig',newline='')
    writer = csv.writer(csvFile)
    writer.writerow(fieldHeader)
    p_name = ''
    p_prof = ''

    for x in get_info():
        if p_name == x.name and p_prof == x.prof:
            pass
        else:
            d1 = [  
                x.id,
                x.code,
                x.name,
                x.prof,
                x.type,
                x.rate,
                x.notice
            ]
            writer.writerow(d1)

        p_name = x.name
        p_prof = x.prof

    csvFile.close()


main()