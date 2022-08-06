from flask import Flask, jsonify, request, redirect, url_for, abort
import sqlite3
import json
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, create_refresh_token, \
    unset_jwt_cookies
from datetime import datetime, timedelta, timezone

app = Flask(__name__)
CORS(app)
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)


def createDB():
    my_conn = sqlite3.connect('ClassDB.db')
    my_cur = my_conn.cursor()
    query1 = 'CREATE TABLE UserInfo(UserName TEXT NOT NULL, PassWord TEXT NOT NULL) '
    my_cur.execute(query1)
    print('Successful')
    my_conn.close()


def User_Info():
    with sqlite3.connect('ClassDB.db') as my_conn:
        cur = my_conn.cursor()
        query1 = 'SELECT * FROM UserInfo'
        cur.execute(query1)
        rows = cur.fetchall()

    return rows


def marksTable():
    try:
        my_conn = sqlite3.connect('ClassDB.db')
        my_cur = my_conn.cursor()
        query1 = 'CREATE TABLE UserMarks(UserName TEXT NOT NULL, MTC INT NOT NULL,SST INT NOT NULL,ENG INT NOT NULL,' \
                 'SCI INT NOT NULL) '
        my_cur.execute(query1)
        print('Successful')
        my_conn.commit()
        my_conn.close()
    except:
        print('Error')


@app.route('/get_marks', methods=['POST'])
def get_marks():
    name = request.json['name']
    try:
        with sqlite3.connect('ClassDB.db') as my_conn:
            cur = my_conn.cursor()
            cur.execute('SELECT MTC,SST,ENG,SCI FROM UserMarks WHERE UserName = ?', (name,))
            marks = cur.fetchall()
            x = list(marks[0])
            print(f'marks for user {name}',x)
            response = {
                'MTC': x[0],
                'SST': x[1],
                'ENG': x[2],
                'SCI': x[3]
            }
            return response
    finally:
        my_conn.close()


@app.route('/add_marks', methods=['POST'])
def add_marks():
    name = request.json['UserName']
    mtc = request.json['mtc']
    sci = request.json['sci']
    eng = request.json['eng']
    sst = request.json['sst']
    userInput = (name, mtc, sst, eng, sci)
    try:
        with sqlite3.connect('ClassDB.db') as my_conn:
            cur = my_conn.cursor()
            cur.execute("INSERT INTO UserMarks(UserName,MTC,SST,ENG,SCI) VALUES (?,?,?,?,?)", userInput)
            my_conn.commit()
        print('Succefully recorded the marks')
        msg = {
            'msg': 'Succefully recorded the marks'
        }
        return jsonify(msg)
    except:
        print('Error in Adding marks')
    finally:
        my_conn.close()


@app.route('/data', methods=['GET'])
def data():
    dat = {
        'name': 'Moses',
        'age': '20'
    }
    response = jsonify(dat)
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return response


def isUser(name, password):
    try:
        userInfo = (name, password)
        with sqlite3.connect('ClassDB.db') as my_conn:
            cur = my_conn.cursor()
            cur.execute('SELECT UserName , PassWord FROM UserInfo WHERE UserName = ? AND PassWord = ? ', userInfo)
            result = cur.fetchall()
            if len(result) == 0:
                return False
            else:
                return True
    except:
        my_conn.rollback()
    finally:
        my_conn.close()


def addUser(name, password):
    try:
        with sqlite3.connect('ClassDB.db') as my_conn:
            cur = my_conn.cursor()
            cur.execute('INSERT INTO UserInfo(UserName,PassWord) VALUES (?,?)', (name, password))
            my_conn.commit()
            # status = 'RECORD SUCCESSFULLY ADDED'
            return jsonify(dat)
    except:
        my_conn.rollback()
    finally:
        my_conn.close()


@app.route('/register', methods=['POST'])
def registerUser():
    name = request.json['name']
    password = request.json['password']

    if isUser(name, password):
        return jsonify({"msg": "User Already Exists"}), 409
    else:
        userData = {
            'name': name,
            'password': password
        }
        addUser(name, password)
        return jsonify(userData)


@app.route('/login', methods=['POST'])
def login():
    name = request.json['username']
    password = request.json['passw']

    def create_access_Token(username):
        access_Token = create_access_token(identity=username)
        return access_Token

    def create_refresh_Token(username):
        refresh_Token = create_refresh_token(identity=username)
        return refresh_Token

    if not isUser(name, password):
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        access_token = create_access_Token(name)
        refresh_token = create_refresh_Token(name)
        response = {
            'name': name,
            'password': password,
            'access_token': access_token,
            'refresh_token': refresh_token
        }
        return jsonify(response)


@app.route('/logout', methods=['POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@app.route('/profile', methods=['GET'])
# @jwt_required()
def profile():
    login_name = request.json['name']
    result = get_marks(login_name)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
