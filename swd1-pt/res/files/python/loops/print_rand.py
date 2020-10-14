import random
number = 1 # this value for number does not have a meaning in itself
           # it is a device to force the while loop to execute at least once
while number != 11:
   number = random.randint(1, 11)	       
   print(number)
