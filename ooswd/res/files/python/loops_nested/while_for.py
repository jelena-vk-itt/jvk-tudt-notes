import random
n = random.randint(0, 5)
while n != 0:
    for i in range(n, random.randint(6, 10)):
        print(str(i) + " ", end="")
    print("")
    n = random.randint(0, 5)
