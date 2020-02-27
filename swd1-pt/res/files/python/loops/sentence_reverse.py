sentence = input("Type in a sentence:\n")

# solution 1 - iterate forward and concatenate backwards
backwardSentence = ""
for char in sentence:
    backwardSentence = char + backwardSentence
print(backwardSentence)

# solution 2 - iterate backwards with positive indices
#              and concatenate forward
backwardSentence2 = ""
for index in range(len(sentence)-1, -1, -1):
    backwardSentence2 += sentence[index]
print(backwardSentence2)

# solution 3 - iterate backwards with negative indices
#              and concatenate forward
backwardSentence3 = ""
for index in range(-1, -1 * len(sentence) - 1, -1):
    backwardSentence3 += sentence[index]
print(backwardSentence3)
