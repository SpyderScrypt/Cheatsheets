class Circle():

    pi = 3.14

    def __init__(self,rad = 1):
        self.rad = rad

    def area(self):
        return self.rad * self.rad * self.pi


mycircle = Circle(10)
print(mycircle.area())


class Animal():
    def __init__(self):
        print("Animal")

    def eat(self):
        print("eat")

class Dog(Animal):
    
    def __init__(self):
        Animal.__init__(self)
        print("dog")

d = Dog()
#op - 
# Animal
# dog
d.eat()
#eat

# We can override medhods of parent in child by giving it same name
# If parent class takes a parameter then pass it with
# d = Dog("param")
#then pass it in child like
# class Dog(Animal):
    
#     def __init__(self,param):
#         Animal.__init__(self,param)
#         print("dog")