
numList = []
f = open("data.txt", 'r')
while True:
   l = f.readline()
   if not ''.join(l.strip().split('.')).isnumeric():
       break
   numList += [ float(l) ]

print(numList)
