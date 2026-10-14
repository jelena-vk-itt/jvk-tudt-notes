cellWidth = 6
colCount = 3
rowCount = 7

print(":-)".center(cellWidth), end="")
print("|", end="")
for colNum in range(1, colCount + 1):
    head = "c" + str(colNum) 
    print(head.center(cellWidth), end="")
print("")
    
print("-" * (cellWidth * (colCount + 1) + 1))
    
for rowNum in range(1, rowCount + 1):
    head = "r" + str(rowNum)
    print(head.center(cellWidth), end="")
    print("|", end="")
    for colNum in range(1, colCount + 1):
        data = "r" + str(rowNum) + "c" + str(colNum)
        print(data.center(cellWidth), end="")
    print("")
