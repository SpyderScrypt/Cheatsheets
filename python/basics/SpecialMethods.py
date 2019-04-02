class Book():
    def __init__(self,title,author):
        self.title = title
        self.author = author
    # Below method returns custom string representation of an object
    def __repr__(self):
        return f"Title: {self.title} , Author: {self.author}"

    # Below method returns length representation of an object
    def __len__(self):
        return 3

mybook = Book("Python","Akash")

print(mybook)
# If we print mybook without __repr__
# <__main__.Book object at 0x7fcd0e980470>
# If we print with __repr__ method
# Title: Python , Author: Akash

print(len(mybook))
# op without custom __len__
# TypeError: object of type 'Book' has no len()
# op with custom __len__
# 3