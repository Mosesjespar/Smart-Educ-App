from flask import Flask
from flask_cors import CORS

api = Flask(__name__)
CORS(api)


@api.route('/')
def main():
    return {
        'msg': 'hello world'
    }


if __name__ == '__main__':
    api.run(debug=True)
