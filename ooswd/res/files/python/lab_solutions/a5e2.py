import random

results = []
for expCount in range(0, 100):
    randCount = 1
    while random.randint(1, 10) != 10:
        randCount += 1
    results += [ randCount ]

print("Mean number of tries it took to draw a 10: {}".format(sum(results)/len(results)))
