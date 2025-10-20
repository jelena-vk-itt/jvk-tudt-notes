# function that writes a list of numbers separated by commas
def print_comma_sep_list(lst):
    outstring = ''
    for index in range(len(lst)):
        if index != 0:
            outstring += ', '
        outstring += str(lst[index])
    print(outstring)


numList = [1, 2, 3, 5, 7]
print_comma_sep_list(numList)


# 1
print_comma_sep_list([n **2 for n in numList])

# 2
print_comma_sep_list([round(n **0.5, 2) for n in numList])


# 3
print_comma_sep_list([n for n in numList if n % 2 == 1])
