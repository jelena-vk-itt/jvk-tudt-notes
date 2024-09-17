# for example, user input [y/n] defines the number of iterations
import random
while input("Run random experiment [y/n]?") == 'y':
    counter = 1
    while random.randint(0, 5) != 5:
        counter +=1
    print(counter)
