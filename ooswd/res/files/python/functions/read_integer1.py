ordinal_number = 0

def get_integer():
    # define as global to be able to modify
    global ordinal_number
    # increase number for this call to get_integer()
    ordinal_number += 1

    # loop to get valid integer
    input_string = input(f"{ordinal_number}: Input a positive integer: ")
    while not input_string.isdigit():
        input_string = input("Try again: ")

    return int(input_string)

# get three integers from the user an place them in a list
integers = []
for c in range(0, 3):
    the_integer = get_integer()
    integers.append(the_integer)

# convert to strings for easier printing
integer_strings = []
for i in integers:
    integer_strings.append(str(i))

print("Your integers: " + ", ".join(integer_strings))
