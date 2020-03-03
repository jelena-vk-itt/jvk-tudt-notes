greeting = "Hello {0}, nice to meet you! It is your {1}. time here."

name = input("Enter your name: ")
n = 3

print(greeting.format(name, n))

firstThreeLettersOfName = name[:3]
print(firstThreeLettersOfName)
lastThreeLettersOfName = name[-3:]
print(lastThreeLettersOfName)
with3rdLetterLeftOut = name[:3] + name[4:11]
print(with3rdLetterLeftOut)
if name.__contains__("ill"):
    print("Your name contains 'ill'.")
else:
    print("No 'ill's in your name.")

print("The letter e appears in your name at position {0}".format(name.index("e")))

