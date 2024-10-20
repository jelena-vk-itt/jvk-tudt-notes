import random
maxGuesses = 3
correctCount = 0
guessCount = 0
while guessCount < maxGuesses:
    randNum = random.randint(1, 3)
    inNum = int(input("Please guess my number between 1 and 3: "))
    if randNum != inNum:
        print("That's wrong :-(")
    else:
        print("That's right!")
        correctCount += 1
    guessCount +=1


print("You got {} out of {} right.".format(correctCount, maxGuesses))
