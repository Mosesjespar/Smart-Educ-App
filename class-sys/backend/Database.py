import sqlite3


class Student:
    def __init__(self, first_name, last_name, clas, pin, gender):
        self.first_name = first_name
        self.last_name = last_name
        self.clas = clas
        self.pin = pin
        self.gender = gender

    def register(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            reg_query = '''INSERT INTO students(First_Name,Last_Name,Class,Pin,Gender)
                VALUES (?,?,?,?,?)
                '''
            detail_query = 'SELECT * FROM students WHERE First_Name = ? AND Last_Name = ?'
            reg_data = (self.first_name, self.last_name, self.clas, self.pin, self.gender)
            detail_data = (self.first_name, self.last_name)
            cur.execute(detail_query, detail_data)
            details = cur.fetchall()
            if len(details) == 0:
                cur.execute(reg_query, reg_data)
                conn.commit()
                print(f'{self.first_name} {self.last_name} is registered')
            else:
                print(f'{self.first_name} {self.last_name} is already a student')

    def details(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            detail_query = 'SELECT * FROM students WHERE First_Name = ? AND Last_Name = ?'
            data = (self.first_name, self.last_name)
            cur.execute(detail_query, data)
            return cur.fetchall()

    def marks(self):
        pass

    def class_teacher(self):
        pass


class Teacher:
    def __init__(self, first_name, last_name, classes, pin, gender, subjects):
        self.first_name = first_name
        self.last_name = last_name
        self.classes = classes
        self.pin = pin
        self.gender = gender
