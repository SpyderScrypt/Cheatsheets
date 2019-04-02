# It is like a object but in json form

d = {"key1":"value1","key2":"value2"}

print(d)

#acces item no dot operator is used, instead []
print(d["key1"])

# add new value to d

d["key3"] = "value3"
print(d)

#print only keys
print(d.keys())

#print only values
print(d.values())

#print all keys and values pair
print(d.items())