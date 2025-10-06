prompt = "Please enter a number (or non-numeric value if finished): "

numList = []
number = input(prompt)
while number.count(".") < 2 and number.replace(".", "0").isnumeric():
    if number.count(".") == 0:
        numList += [int(number)]
    else:
        numList += [float(number)]
    number = input(prompt)

print("You have entered {0} numbers.".format(len(numList)))
print("Your smallest number is {0}.".format(min(numList)))
print("Your biggest number is {0}.".format(max(numList)))
print("The mean of your numbers is {0}.".format(sum(numList)/len(numList)))
