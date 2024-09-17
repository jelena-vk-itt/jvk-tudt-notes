from random import *

currentUniqueCode = 2
items = [[1, "bread", 1.5, 10], [2, "milk", 2.0, 8]]

option = 0

while option != 5:

    print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")

    print("-----------------------------------------")
    print("        Groceries at Your Fingertips     ")
    print("-----------------------------------------")
    print("")
    print("Items in stock")
    print("---------------")

    print("{0:>3}{1:>12}{2:>13}{3:>7}".format("ID", "Name", "Price(€)", "Stock"))

    for item in items:
        print("{0:>3}{1:>12}{2:>10,.2f}{3:>9}".format(item[0], item[1], float(item[2]), item[3]))

    print("")
    print("Stock management options")
    print("-------------------------")
    print("(1) add item")
    print("(2) remove item")
    print("(3) update item")
    print("(4) update stock")
    print("(5) exit")
    option = int(input("Please choose an option (1, 2, 3, 4 or 5): "))

    if option == 1:
        print("")
        print("Adding a new grocery item")
        print("--------------------------")
        name = input("Please enter the name of the item: ")
        price = float(input("Please enter the price of the item (in Euro): "))
        stock = int(input("Please enter the number of items in stock: "))
        currentUniqueCode += 1
        items += [[currentUniqueCode, name, price, stock]]

    elif option == 2:
        print("")
        print("Removing a grocery item")
        print("------------------------")
        uniqueId = int(input("Please enter the id of the item you wish to remove: "))
        itemToRemove = [item for item in items if item[0] == uniqueId][0]
        items.remove(itemToRemove)

    elif option == 3:
        print("")

        print("Updating a grocery item")
        print("------------------------")
        uniqueId = int(input("Please enter the id of the item you wish to update: "))
        itemToUpdate = [item for item in items if item[0] == uniqueId][0]
        itemToUpdate[2] = float(input("Please enter the price of the item (in Euro): "))
        itemToUpdate[3] = int(input("Please enter the number of items in stock: "))

    elif option == 4:
        print("")
        print("Updating stock counts")
        print("----------------------")
        for item in items:
            item[3] -= randint(0, item[3])

        print("Items low in stock:")
        for item in [item for item in items if item[3] < 3]:
            print(item[1])

        input("Press any key to continue...")







