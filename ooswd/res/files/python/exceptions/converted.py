class ProblemWithAge(Exception):
    pass

try:
    age = int(input("Please input your age: "))
    if age < 0:
        raise ValueError
    if age < 18:
        raise ProblemWithAge("ERROR: You are not old enough to use this website.")
except ValueError:
    print("ERROR: Age is invalid.")
except ProblemWithAge as pwa:
    print(pwa)
else:
    try:
        quantity = int(input("How many bottles of craft beer do you want to buy? "))
        if quantity < 1:
            raise ValueError
    except ValueError:
        print("ERROR: Quantity is invalid.")
    else:
        payment = input("Would you like to pay with Revolut or credit card? ")
        if payment != 'Revolut' and payment != 'credit card':
            print("ERROR: Invalid payment type.")
        else:
            print("Thank you for your order!")