import sqlite3


class Student:
    def __init__(self, first_name, last_name, clas, pin, gender):
        self.first_name = first_name
        self.last_name = last_name
        self.clas = clas
        self.pin = pin
        self.gender = gender

    def isRegistered(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            detail_query = 'SELECT * FROM students WHERE First_Name = ? AND Last_Name = ?'
            detail_data = (self.first_name, self.last_name)
            cur.execute(detail_query, detail_data)
            details = cur.fetchall()
        return len(details) != 0

    def register(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()

            reg_query = '''INSERT INTO students(First_Name,Last_Name,Class,Pin,Gender)
                VALUES (?,?,?,?,?)
                '''
            reg_data = (self.first_name, self.last_name, self.clas, self.pin, self.gender)

            cur.execute(reg_query, reg_data)
            conn.commit()
            print(f'{self.first_name} {self.last_name} is registered')

            response = {
                'isRegistered': 'YES',
                'First Name': self.first_name,
                'Last Name': self.last_name,
                'Class': self.clas,
                'pin': self.pin,
                'gender': self.gender
            }
            return response

    def details(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            detail_query = 'SELECT * FROM students WHERE First_Name = ? AND Last_Name = ?'
            data = (self.first_name, self.last_name)
            cur.execute(detail_query, data)
            results = list(cur.fetchall()[0])
            info = {
                'first_name': results[0],
                'last_name': results[1],
                'class': results[2],
                'pin': results[3],
                'gender': results[4]
            }
            if len(results) == 0:
                return {
                    'msg': f'{self.first_name} {self.last_name} is not a Student'
                }
            else:
                return info

    def class_teacher(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            detail_query = 'SELECT * FROM classTeachers WHERE Class = ?'
            data = self.clas
            cur.execute(detail_query, data)
            results = list(cur.fetchall()[0])
            return {
                'tr': results[0]
            }


class Teacher:
    def __init__(self, first_name, last_name, classes, pin, gender, subjects):
        self.first_name = first_name
        self.last_name = last_name
        self.classes = classes
        self.pin = pin
        self.gender = gender
        self.subjects = subjects

    def isRegistered(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            detail_query = 'SELECT * FROM teachers WHERE First_Name = ? AND Last_Name = ?'
            detail_data = (self.first_name, self.last_name)
            cur.execute(detail_query, detail_data)
            details = cur.fetchall()
        return len(details) != 0

    def register(self):
        with sqlite3.connect('school.db') as conn:
            cur = conn.cursor()
            reg_query = '''INSERT INTO teachers(First_Name,Last_Name,Class,Pin,Gender,Subjects)
                VALUES (?,?,?,?,?,?)
                '''
            reg_data = (self.first_name, self.last_name, self.classes, self.pin, self.gender, self.subjects)
            cur.execute(reg_query, reg_data)
            conn.commit()
            print(f'{self.first_name} {self.last_name} is registered')
            response = {
                'message': f'{self.first_name} {self.last_name} is registered',
                'First Name': self.first_name,
                'Last Name': self.last_name,
                'Class': self.classes,
                'pin': self.pin,
                'gender': self.gender,
                'subjects': self.subjects
            }
            return response
