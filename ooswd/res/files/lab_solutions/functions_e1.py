cellWidth = 6
colCount = 3
rowCount = 7

# preparing functions
#---------------------

# print any cell, given some data
def printCell(data):
    print(data.center(cellWidth), end="")

# make data given row and column numbers
def makeD(row_num, col_num):
    return "r" + str(row_num) + "c" + str(col_num)

# make a heading, given the type (row is True or False) and number
def makeH(row, num):
    letter = 'c'
    if row:
        letter = 'r'
    return letter + str(num)

# make a smiley, given whether it should be happy or not (happy is True or False)
def makeSmiley(happy):
    mouth = "("
    if happy:
        mouth = ")"
    return ":-" + mouth

# print a header row
def printHRow():
    printCell(makeSmiley(True))
    print("|", end="")
    for colNum in range(1, colCount + 1):
        printCell(makeH(False, colNum))
    print("")

# print a data row
def printDRow(num):
    printCell(makeH(True, num))
    print("|", end="")
    for colNum in range(1, colCount + 1):
        printCell(makeD(num, colNum))
    print("")

# print a separating line
def printLine():
    print("-" * (cellWidth * (colCount + 1) + 1))
    
# print the whole table by calling the required functions
printHRow()
printLine()
for rowNum in range(1, rowCount + 1):
    printDRow(rowNum)
