i = int(input("Please enter a whole number: "))
j = int(input("Please enter another whole number: "))
if i % j:
    print("{0} is not a factor of {1}".format(j, i))
else:
    print("{0} is a factor of {1}".format(j, i))
