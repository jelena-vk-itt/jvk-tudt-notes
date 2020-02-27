sentence = input("Enter a sentence, please.\n")

spaceCount = 0
for char in sentence:
    if char == " ":
        spaceCount += 1


print("Spaces: " + str(spaceCount))

