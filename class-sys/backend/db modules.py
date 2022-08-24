import sqlite3
from Database import Student


# created
def Students_table():
    conn = sqlite3.connect('school.db')
    cur = conn.cursor()
    query = '''CREATE TABLE students(
                First_Name VARCHAR NOT NULL,
                Last_Name VARCHAR NOT NULL,
                Class VARCHAR NOT NULL,
                Pin INT NOT NULL,
                Gender VARCHAR(1) NOT NULL
   )'''
    cur.execute(query)
    print('students table created')


# created
def Teachers_table():
    conn = sqlite3.connect('school.db')
    cur = conn.cursor()
    query = '''CREATE TABLE teachers(
                First_Name VARCHAR NOT NULL,
                Last_Name VARCHAR NOT NULL,
                Class VARCHAR NOT NULL,
                Pin INT NOT NULL,
                Gender VARCHAR(1) NOT NULL,
                Subjects VARCHAR NOT NULL
    )'''
    cur.execute(query)
    print('teachers table created')

