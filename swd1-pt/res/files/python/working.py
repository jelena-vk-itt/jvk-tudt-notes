import random
for i in range(0, 10):
    counter = 1
    while random.randint(0, 5) != 5:
        counter +=1
    print(counter)	    
