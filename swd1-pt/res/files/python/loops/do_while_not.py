sentence = ""
word = input("Please input the next word of your sentence (with . at end to stop): ")
sentence += " " + word
while word[-1] != ".":
    word = input("Please input the next word of your sentence (with . at end to stop): ")
    sentence += " " + word

print("Your sentence: \"{}\"".format(sentence.strip()))
