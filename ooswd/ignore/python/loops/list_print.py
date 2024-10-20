lst = input("Please enter some words separated by whitespace: ").split()
index = 0
lstLen = len(lst)
while index < lstLen:
    ordNum = index + 1
    print("{0} {1}".format(ordNum, lst[index]))
    index += 1
