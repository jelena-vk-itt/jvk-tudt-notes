namesList = input("Please input the names of the players: ").split()
scoresList = list(map(int, input("Please input the players' scores: ").split()))
print("The highest score is ", max(scoresList))
print("The lowest score is ", min(scoresList))
print("The average score is ", sum(scoresList) / len(scoresList))
print("List of players in order of their scores: ", ' '.join(sorted(namesList, key=lambda name : scoresList[namesList.index(name)], reverse=True)))


