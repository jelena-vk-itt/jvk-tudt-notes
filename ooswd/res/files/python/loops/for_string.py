inputString = input("Please enter a text string: ")
outputString = ""
for index in range(len(inputString) - 1, -1, -1):
    outputString += inputString[index]

outputString2 = inputString[::-1]
print("Output of inversion: " + outputString)
print("Output of inputString[::-1]: " + outputString2)
print("The two output strings are equal: " + str(outputString == outputString2))
