# when we run py program , all the code at indentation level one
# gets executed first

# there is built in variable in py called __name__
# this variable is true if file is run directly and false if file
# is imported

def func():
    print("Func in one.py")

print("Top level in one.py")

if __name__ == "__main__":
    print("One.py is being run directly")
else:
    print("One.py has been imported")