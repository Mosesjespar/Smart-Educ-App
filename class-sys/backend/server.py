from flask import Flask, request, json
from flask_cors import CORS
from Database import Student, Teacher

api = Flask(__name__)
CORS(api)


@api.route('/')
def main():
    return {
        'msg': 'Hello There, Welcome to Study Life'
    }


@api.route('/register', methods=['POST'])
def Register_Student():
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    pin = request.json['pin']
    Class = request.json['Class']
    gender = request.json['gender']
    new_student = Student(first_name, last_name, Class, pin, gender)
    return new_student.register()


if __name__ == '__main__':
    api.run(debug=True)
