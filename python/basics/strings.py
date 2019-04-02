# indexing
name = "Akash"
print(name[2])

# reverse indexing
print(name[-1])

#slicing [start:stop:step]
print(name[1:5:2])
#to go all way to end
print(name[0::2])
#use negative indexing to get reverse value, below is eg to reverse string
print(name[::-1])

#length of string
print(len("Akash"))


#strings are immutable 
#eg akash[2] = "Z" will not work

#concat strings
surname = "Salunkhe";
print(name + " " + surname)


#Upper and lower case
print(name.upper())
print(name.lower())


#split
print("Akash Salunkhe".split())
#split with some char
print("Akash Salunkhe".split("h"))


#format
print("My name is {}".format("Akash"))

print(f"My name is {name}")