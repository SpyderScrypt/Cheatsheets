# To run this file , first install flask
#  sudo python3.6 -m pip install flask

from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "<h1>Hello Puppy</h1>"


@app.route("/about")
def about():
    return "<h1>About page</h1>"


if __name__ == "__main__":
    app.run()
