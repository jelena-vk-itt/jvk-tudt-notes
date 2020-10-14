theString = input("Please enter a string: ")
theSubStr = input("Please enter the substring to search for: ")

positions = []
curIndex = theString.find(theSubStr)
while curIndex != -1:
    positions += [ str(curIndex) ]
    curIndex= theString.find(theSubStr, curIndex + len(theSubStr))

gramNumEnding = ""
numsForOutput = ", ".join(positions)
lastCommaPos = numsForOutput.rfind(",")
if lastCommaPos != -1:
    gramNumEnding = "s"
    numsForOutput = numsForOutput[:lastCommaPos] + " and" + numsForOutput[lastCommaPos + 1:]

if len(positions):
    print("The substring appears at position" + gramNumEnding + " " + numsForOutput + " in the string.")
else:
    print("The substring does not appear in the string.")
