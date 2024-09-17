import random

wordStr = input("Please enter some words consisting of lower-case letters only and separated by whitespace characters: ")
wordLst = wordStr.split()
wordStrNoSep = "".join(wordLst)
if not(wordStrNoSep.isalpha() and wordStrNoSep.islower()):
    print("The word list is not in the required format.")
else:
    print("\nThis is your friendly word processor. What do you want me to do?\n"
          "----------------------------------------------------------------\n"
          "1 Reverse the order of the words\n"
          "2 Convert the words to all upper-case\n"
          "3 Convert the words to title-case\n"
          "4 Shuffle the words\n"
          "5 Replace a word with another word, input by you\n"
          "6 Order the words based on their length\n"
          "7 Move the first three words to the end\n")

    choice = input("Please enter your choice [1-5]: ")
    if choice == "1":
        wordLst.reverse()
    elif choice == "2":
        wordLst = wordStr.upper().split()
    elif choice == "3":
        wordLst = wordStr.title().split()
    elif choice == "4":
        random.shuffle(wordLst)
    elif choice == "5":
        wtr = input("Enter word to replace: ")
        nw = input("Enter new word: ")
        wordLst[wordLst.index(wtr)] = nw
    elif choice == "6":
        wordLst.sort(key=len, reverse=True)
    elif choice == "7":
        wordLst = wordLst[3:] + wordLst[:3]
    else:
        print("Invalid choice.")

    printLayout = input("Please enter 'v' if you would like the output words to be printed under each other, otherwise, enter any other string: ")
    print("Your words after processing: ", end="")
    if printLayout == 'v':
        print("")
        print("\n".join(wordLst))
    else:
        print(" ".join(wordLst))
