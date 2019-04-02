x = "outside"

def report():
    x = "inside"
    return x

print(report()) 
#inside
print(x)
#outside

#LEGB RULE
#LOCAL ENCLOSING GLOBAL BUILT IN


#LOCAL EG
def first():
    #Local Assignment
    x = "Local"
    print(x)

#ENCLOSING function inside another function
y = "This is Global level"

def enclosing():
    y = "Enclosing Level"

    def inside():
        print(y)    #Enclosing Level
        #First x value is looked in local then in enclosing

    inside()

enclosing()


#changing global value
z = "outside"

def abc():
    global z
    z = "inside"
    return z

print(z)    #outside
abc()
print(z)    #inside

#using same name value by passing it

d = "outside"

def asd(d):
    d = "inside"
    print(d)    #inside
    return d

asd(d)
print(d)    #outside
