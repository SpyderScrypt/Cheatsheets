# Sets are also like lists but contains unique elements and uses set() syntax.
# also if we add duplicate values , it does not gives error but 
# print set without repetating duplicates

# set1 = set(1,2,3,4,5) not allowed

set1 = set()

set1.add(1)
set1.add(2)
set1.add(3)
set1.add(3)

print(set1)
# op - {1, 2, 3}

# Convert list to set and remove duplicates of list
list1 = [1,2,3,4,1,2,3,6,1,5,2,3]

set2 = set(list1)
print(set2)
# op - {1, 2, 3, 4, 5, 6}