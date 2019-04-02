# To run this file , first install flask
#  sudo python3.6 -m pip install flask

from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "<h1>Hello Puppy</h1>"


@app.route("/about/<name>")
def about(name):
    # Below line causes error
    return "<h1>Dynamic variable {}</h1>".format(name[100])


if __name__ == "__main__":
    # Set debug = true
    app.run(debug=True)
