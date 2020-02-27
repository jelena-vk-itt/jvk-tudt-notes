prompt = "Please enter your name and surname separated by a space: "
iteratedRequest = "Please use the requested format."

fullName = input(prompt)
while not fullName.__contains__(" "):
    print(iteratedRequest)
    fullName = input(prompt)

positionOfSpace = fullName.index(" ")

firstName = fullName[:positionOfSpace]
surname = fullName[(positionOfSpace + 1):]

print("Your first name is {0}".format(firstName))
print("Your surname is {0}".format(surname))
