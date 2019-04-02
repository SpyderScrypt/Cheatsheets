list1 = [1,2,3,4,5]

print(type(list))   #<class 'type'>
print(type(3.6))    #<class 'float'>
#everything in py is class

class Sample():
    pass

x = Sample()
print(type(x))  #<class '__main__.Sample'>


class Dog():

    #CLASS OBJECT ATTRIBUTES (Called first and are true for all instances/objects)
    species = "mammal"

    def __init__(self,breed,name):
        self.breed = breed
        self.name = name

x = Dog("lab","Sammy")   

print(x.breed)   #lab
print(x.name)   #Sammy
print(x.species)  #mammal