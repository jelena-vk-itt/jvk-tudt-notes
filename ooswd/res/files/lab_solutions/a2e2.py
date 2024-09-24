# read the name and surname
nameAndSurname = input("Please enter your name and surname, separated by a space: ")

# split into name and surname as separate elements of a list
nameAndSurnameList = nameAndSurname.split()

# print the required information in the required format
print("{0}, {1}".format(nameAndSurnameList[1].capitalize(), nameAndSurnameList[0][0].capitalize()))
