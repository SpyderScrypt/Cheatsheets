# for in loop
list1 = [1,2,3,4,5,6]

for temp in list1:
    print(temp)

#looping char
str1 = "Akash"

for temp in str1:
    print(temp)

#looping dictonary
#print only key
obj1 = {"Akash":22,"asd":42,"qwe":32,"fgh":28}
for temp in obj1:
    print(temp)
#print values
obj1 = {"Akash":22,"asd":42,"qwe":32,"fgh":28}
for temp in obj1:
    print(obj1[temp])

# for loops with list of tuples
tup1 = [(1,2),(3,4),(5,6)]

for temp in tup1:
    print(temp)
#op - 
# (1, 2)
# (3, 4)
# (5, 6)

# to unpack it, can work withut parenthesis around items
for (item1,item2) in tup1:
    print(item1)
    print(item2)
# op
#1
# 2
# 3
# 4
# 5
# 6



#While loop , we can give else to while

counter = 1

while counter < 5:
    print(f"counter is currently : {counter}")
    counter = counter+1



#range like map, third param is step size
for x in range(0,5):
    print(x)

# op 
# 0
# 1
# 2
# 3
# 4

result2 = range(0,11,2)
print(result2)
# range(0, 11, 2)

#cast result
result = list(range(0,11,2))
print(result)
# [0, 2, 4, 6, 8, 10]

#In keyword
print("s" in "asdaaawerqawerqa")
# True