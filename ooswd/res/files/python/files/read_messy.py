file = open("people.txt", "r")
list_of_lists = []

for l in file:
    line = l.strip("\n")
    line_els = line.split(sep=",")
    list_of_lists.append([le.strip('" ') for le in line_els])

file.close()

print(list_of_lists)