# To create a template, first import renter_template from flask, then create a folder named
# templates, note that flask will look for this folder
# then create html file in templates folder
# then inside py file, return that template
# to serve static files, store it in static folder and inside html page use that path
# We can even pass variable in template , and use it in template using {{variable}}
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():

    someVariable = "ABC"
    return render_template("basic.html", someVariable=someVariable)


if(__name__ == "__main__"):
    app.run(debug=True)
