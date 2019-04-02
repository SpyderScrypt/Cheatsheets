# program to take a name from route and add extra character of last letter
# eg - akash becomes akashh

from flask import Flask

app = Flask(__name__)


@app.route("/namechange/<name>")
def namechange(name):
    temp = name[-1]
    nameToReturn = "{}{}".format(name, temp)
    return "<h1>Changed name is - {}</h1>".format(nameToReturn)


if __name__ == "__main__":
    app.run(debug=True)












