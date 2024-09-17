
numList = []
f = open("data.txt", 'r')
while True:
   l = f.readline()
   if not ''.join(l.strip().split('.', 1)).isnumeric():
       break
   numList += [ float(l) ]

print(numList)
