inp = input("Input an index to set to zero: ")
nums = [1, 2, 3, 4, 5]
index = 0
try:
    index = int(inp)
    nums[index] = 0
except ValueError as ve:
    print("A non-number value was entered!")
    print("Exception message:", ve)
except IndexError as ie:
    print("The index is out of bounds!")
    print("Exception message:", ie)
else:
    print("Here is the new list of numbers: ", nums)
finally:
    print("Complete, but not necessarily successfully :-).")
