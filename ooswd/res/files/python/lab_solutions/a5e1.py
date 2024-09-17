cellWidth = 6
columnCount = 3
rowCount = 7

print(":-)".center(cellWidth, " ") + "|", end="")
for colNum in range(1, columnCount + 1):
    print(("c" + str(colNum)).center(cellWidth, " "), end="")
print("")
    
print("-" * (cellWidth * (columnCount + 1) + 1))
    
for rowNum in range(1, rowCount + 1):
    print(("r" + str(rowNum)).center(cellWidth, " ") + "|", end="")
    for colNum in range(1, columnCount + 1):
        print(("r" + str(rowNum) + "c" + str(colNum)).center(cellWidth, " "), end="")
    print("")	
