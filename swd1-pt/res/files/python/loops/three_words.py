inputStr = None
inputList = []
while len(inputList) != 3 or not ''.join(inputList).isalpha():
   if inputStr != None:
       print("You entered invalid data. Please try again.")
   inputStr = input("Enter three words consisting of alphabetic characters and separated by whitespace characters: ")
   inputList = inputStr.split()

i = 0
while i < 3:
    print("{0}[{1}]".format(inputList[i], len(inputList[i])))
    i += 1
