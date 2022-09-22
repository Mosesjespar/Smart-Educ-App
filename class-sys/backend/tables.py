import sqlite3


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


# created
def Class_Teachers():
    conn = sqlite3.connect('school.db')
    cur = conn.cursor()
    query = '''CREATE TABLE classTeachers(
                    First_Name VARCHAR NOT NULL,
                    Last_Name VARCHAR NOT NULL,
                    Class VARCHAR NOT NULL
        )'''
    cur.execute(query)
    print('Class teachers table created')


def Marks_Table():
    pass
