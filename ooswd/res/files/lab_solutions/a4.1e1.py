import random

EXP_COUNT=100
STOP_NUM=10

def RAND():
    return random.randint(1, 10)

def print_data(d):
    for exp_data in d:
        print(exp_data)

        
data = []
counts = []
for expIndex in range(0, EXP_COUNT):

    data += [[]]

    
    data[expIndex] += [ RAND() ]
    while data[expIndex][len(data[expIndex]) - 1] != STOP_NUM:
        data[expIndex] += [ RAND() ]

    counts += [ len(data[expIndex]) ]

print("Mean number of tries it took to draw a 10: {}".format(sum(counts)/EXP_COUNT))

printData = input("Would you like the data printed out [y/n]? ")
if printData == 'y':
    print_data(data)
