class ProblemWithAge(Exception):
    pass

try:
    age = int(input("Please input your age: "))
    if age < 18:
        raise ProblemWithAge("You are not old enough to use this website.")
    quantity = int(input("How many bottles of craft beer do you want to buy? "))
    ["Revolut", "credit card"].index(input("Would you like to pay with Revolut or credit card? "))
except ValueError as ve:
    print("An invalid value was entered.")
except ProblemWithAge as pwa:
    print(pwa)
else:
    print("Thank you for your order!")
