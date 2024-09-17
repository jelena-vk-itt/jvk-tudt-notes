columnCount = 3
rowCount = 7
twoDList = []
for rowNum in range(1, rowCount + 1):
    twoDList += [ [] ]
    twoDListLastRow = len(twoDList) - 1
    for colNum in range(1, columnCount + 1):
       twoDList[twoDListLastRow] += [ rowNum * colNum ]
       
print(twoDList)
