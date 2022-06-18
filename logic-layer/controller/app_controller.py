from flask import Flask, make_response, jsonify
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

def error_response(message, status_code): 
    return make_response(jsonify(message), status_code)

if __name__ == "__main__":
    app.run(debug=True)