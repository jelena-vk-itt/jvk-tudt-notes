# start
print("*********** PrimaryFashions Online Shop ***********")

# read in the name and the postcode, validating and correcting the latter
name = input("Please enter your name: ")
postcode = input("Please enter your postcode: ")
while len(postcode) != 7 or not postcode.isalnum():
    postcode = input("Please enter a valid postocode: ")
postcode = postcode.upper()

# read information for a child, building the list of items and accumulating the order total
enterChild = True
# orderString will hold the list of items
orderString = ""
# orderTotal will hold the overall order total
orderTotal = 0
while enterChild:
    childName = input("Please enter the child's name: ")

    print("Which of the following would you like to order for {0}?".format(childName))
    print("(1) jacket")
    print("(2) jumper")
    print("(3) both")
    items = int(input("Your choice (1, 2 or 3): "))
    size = input("What size of uniform would you like to order for {0} (S, M, L)? ".format(childName))

    if items == 1:
        itemPrice = 40
        orderString += "jacket  " + size + "  " + childName + "\n"
    elif items == 2:
        itemPrice = 25
        orderString += "jumper  " + size + "  " + childName + "\n"
    else:
        itemPrice = 65
        orderString += "jacket  " + size + "  " + childName + "\n"
        orderString += "jumper  " + size + "  " + childName + "\n"

    if size == 'M':
        itemPrice *= 1.06
    elif size == 'L':
        itemPrice *= 1.1
    orderTotal += itemPrice

    enterChild = input("Would you like to order items for another child (Y, N)? ") == 'Y'

# print summary and list
print("--------------------------------------------")
print("Thank you for your order!")
print("Your order details are below.")
print("--------------------------------------------")
print("Name: {0}".format(name))
print("Postal code: {0}".format(postcode))
print("Order total: {0}".format(orderTotal))
print("List of ordered items:")
print(orderString)



