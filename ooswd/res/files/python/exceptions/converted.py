# not converted yet!!
ageStr = input("Please input your age: ")
if not ageStr.isdigit():
    print("ERROR: Age is invalid.")
else:
    age = int(ageStr)
    if age < 18:
        print("ERROR: You are not old enough to use this website.")
    else:
        quantityStr = input("How many bottles of craft beer do you want to buy? ")
        if not quantityStr.isdigit():
            print("ERROR: Quantity is invalid.")
        else:
            quantity = int(quantityStr)
            payment = input("Would you like to pay with Revolut or credit card? ")
            if payment != 'Revolut' and payment != 'credit card':
                print("ERROR: Invalid payment type.")
            else:
                print("Thank you for your order!")
