import nameone
print("Top Level In tow.py")

nameone.func()

if __name__ == "__main__":
    print("Two.py is being run directly")
else:
    print("Two.py is being imported")