lineList = []

fileName = input("Please enter the first file name (. to stop): ")
while fileName != '.':
    f = open(fileName, 'r')
    l = f.readline()
    while l != "" and l != "---\n" and l != "---":  # if --- is the last
                                                    # line it may not
                                                    # contain \n
        lineList += [ l.strip() ]  # string for consistency: some lines
                                   # have a \n at the end, some don't
        l = f.readline()
    f.close()
    fileName = input("Please enter the next file name (. to stop): ")

print('\n'.join(lineList))
