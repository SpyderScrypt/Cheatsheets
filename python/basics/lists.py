# Lists are array
mylist = [1,2,3,4,5,6,7,8,9]

print(mylist) #[1, 2, 3 ,4 ,5 ,6 ,7, 8, 9]

print(len(mylist))  # 3

#indexing
print(mylist[2])    # 3

print(mylist[1:4])  #[2, 3, 4]

#push
mylist.append(10)
print(mylist)   #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#push in between
mylist.insert(0,0)
print(mylist)   #[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#pop with index,if no index passed, it will pop last element
popped_item = mylist.pop(0)
print(mylist)   #[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(popped_item)  # 0