# Create a file called __init__.py inside a folder to tell py that it is a package folder
# Same for sub pacckage

from customPackage import someMainScript
from customPackage.subPackage import SomeSubScript


someMainScript.main_report()
SomeSubScript.sub_report()

#op
# Hey I am a function from Main Script
# Hey I am a function from subscript

# Also can import specific func like below
# from customPackage.someMainScript import main_report
