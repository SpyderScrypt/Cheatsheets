from sys import argv
script,first,second,third = argv

print("The script is called: ",script)
print("Your first variable is: ",first)
print("Your second variable is ", second)
print("Your third variable is: ",third)

# To run this type below by providing cmd line args
# python3.6 importFirst.py akkash sal akku
# if we provide more or less  argv, we get error

#In second line of code, script contains file name, if we
# do only script= argv and run cmd 
#python3.6 importFirst.py akkash sal akku
#Then script var will be array containing file name and all cmd
#and all cmd line args