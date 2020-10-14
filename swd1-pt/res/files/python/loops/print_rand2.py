import random
# this version of the program has no 'device' variables, but it is larger and clunky;
# sometimes a hard choice needs to be made between semantic veracity and code elegance
number = random.randint(1, 11)	       
print(number)
while number != 11:
   number = random.randint(1, 11)	       
   print(number)
