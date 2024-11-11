file = open("people.txt", "r")
list_of_lists = []

for line in file:
    list_of_lists.append(list(map(lambda s: s.strip('"\n'), line.split(","))))
file.close()

print(list_of_lists)
