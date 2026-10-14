ordinal_number = 0

def get_ord_num():
    # define as global to be able to modify
    global ordinal_number
    # increase global number 
    ordinal_number += 1
    return ordinal_number

def get_integer():
    input_string = input(f"{get_ord_num()}: Input a positive integer, or '.' to cancel: ")

    # check for cancellation
    if input_string == '.':
        return None
    # loop to get valid integer, or cancellation
    while not input_string.isdigit():
        input_string = input("Try again: ")
        if input_string == '.':
            # return here also has the effect of break
            return None

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
