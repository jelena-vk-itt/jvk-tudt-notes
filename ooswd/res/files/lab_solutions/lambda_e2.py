def lessThanTwoVowels(s):
    VOWELS = 'aeiou'
    count = 0
    for v in VOWELS:
        # add the number of appearances of the current vowel to the count
        count += s.count(v)
        # add the number of appearances of the current vowel in uppercase to the count
        count += s.count(v.upper())
    return count < 2


nameList = ['Amy', 'Ben', 'Carol', 'Dan', 'Emma', 'Finn']
newList = [s.lower() for s in nameList if lessThanTwoVowels(s)]

print("Original list:", nameList)
print("New list:", newList)
