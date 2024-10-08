cellWidth = 6
colCount = 3
rowCount = 7


def cell_data(row_num, cell_num):
    return "r" + str(rowNum) + "c" + str(colNum)

def print_cell(data):
    print(data.center(cellWidth), end="")

print_cell(":-)")
print("|", end="")
for colNum in range(1, colCount + 1):
    print_cell("c" + str(colNum))
print("")
    
print("-" * (cellWidth * (colCount + 1) + 1))
    
for rowNum in range(1, rowCount + 1):
    print_cell("r" + str(rowNum))
    print("|", end="")
    for colNum in range(1, colCount + 1):
        print_cell(cell_data(rowNum, colNum))
    print("")
