# create the dictionary, naming it 'd'
d = {
"apple": "a fruit, can be green, red or yellow",
"baby": "a very young person", 
"car":	"a transport vehicle",
"deer":	"an animal with antlers",
"earth": "a planet, the one we live on"
}

print("The dictionary:", d)
print()

# 1
print("Dictionary keys:", list(d.keys()))
print()

# 2
print("Dictionary values:", list(d.values()))
print()

# 3
print("Number of entries in dictionary:", len(d))
print()

# 4
print("Looking up 'car':", d['car'])
print("Looking up 'earth':", d['earth'])
print()

# 5
print("Checking if dictionary contains 'baby':", 'baby' in d)
print()

# 6
del d['baby']
print("Dictionary after deleting 'baby':", d)
print()

# 7
print("Result of 'popitem' call:", d.popitem())
print("Current dictionary:", d)
print()

# 8
print("Iterating through items:")
for item in d.items():
    print(item)
print()

# 9
d.clear()
print("Dictionary after calling 'clear':", d)
print()

