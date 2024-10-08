groceries = [
    ["bread", "A delicious 500g brown loaf.", 1.0, 10],
    ["milk", "A litre carton of low fat milk.", 1.5, 10],
    ["eggs", "10 free range eggs in a cardboard box.", 2.3, 10],
    ["oats", "500g of porridge oats in paper packaging.", 2.2, 10],
    ["nuts", "100g packet of walnuts.", 3.0, 10]
]
choiceCodeSubmit = str(len(groceries) + 1)
choiceCodeExit = str(len(groceries) + 2)
order = [0] * len(groceries)
price = 0


def print_grocery_item(index, ids=True, stock=True, quantity=False):
    item = groceries[index]
    text = ""
    if ids:
        text += "{0}: ".format(index + 1) if groceries[index][3] > 0 else "   "
    text += "{0: <10} {1: <45} €{2: <7}".format(item[0], item[1], item[2])
    if stock:
        text += "[{0: <}]".format(groceries[index][3]) if groceries[index][3] > 0 else "[OUT OF STOCK]"
    if quantity:
        text += "{0: <}".format(order[index])
    print(text)

def print_menu():
    print("\n********* Groceries at your Fingertips: Shop *********\n")
    for i in range(len(groceries)):
        print_grocery_item(i)
    print("{0}: submit order".format(choiceCodeSubmit))
    print("{0}: exit".format(choiceCodeExit))

def print_order():
    print("\n\nYour order:\n--------------------")
    for index in sorted(range(len(order)), key=lambda i: groceries[i][2], reverse=True):
        if order[index] > 0:
            print_grocery_item(index, ids=False, stock=False, quantity=True)
    print("Total: €{:.2f}".format(price))
    print("Thank you for your order :-). It will be delivered shortly.")

def prompt_choice():
    return input("\nChoose a grocery you wish to buy (1-{0}), "
                 "to submit order ({1}) or to exit ({2}): ".
                 format(len(groceries), len(groceries) + 1, len(groceries) + 2))

def prompt_quantity(index):
    return input("\nPlease specify the quantity ({0} available): ".format(groceries[index][3]))
                 
print_empty_order = lambda: print("\nYour order is empty, cancelling.")
print_zero_quantity = lambda: print("\nThe quantity specified is zero. Your basket is unchanged.")
print_invalid_quantity = lambda: print("\nThe quantity you entered is invalid. Please try again.")
print_unavailable_quantity = lambda: print("\nThe quantity you entered is unavailable. Please try a smaller number.")
print_unavailable_item = lambda: print("\nThe item you requested is out of stock. Please choose another item.")
print_invalid_choice = lambda: print("\nInvalid choice, please try again.")
print_exit = lambda: print("\nThank you. Exiting...")

finished = False
while not finished:
    print_menu()
    choice = prompt_choice()
    if choice in map(str, range(1, len(groceries) + 1)):
        index = int(choice) - 1
        if groceries[index][3] > 0: # check that quantity is greater than 0
            print_grocery_item(index, ids=False, stock=False)
            quantityRead = False
            while not quantityRead: # keep asking until user enters a valid quantity
                quantity = prompt_quantity(index)
                if quantity.isdigit():
                    quantity = int(quantity)
                    if quantity == 0:
                        print_zero_quantity()
                        quantityRead = True # we take this as the user cancelling this item
                    elif quantity < 0:
                        print_invalid_quantity()
                    elif quantity > groceries[index][3]:
                        print_unavailable_quantity()
                    else:
                        order[index] += quantity
                        groceries[index][3] -= quantity # reduce record of quantity in stock
                        quantityRead = True # valid quantity
                else:
                    print_invalid_quantity()
        else:
            print_unavailable_item()
                
    elif choice == choiceCodeSubmit:
        if sum(order) > 0:
            for i, q in enumerate(order):
                price += groceries[i][2] * order[i]
            print_order()
        else:
            print_empty_order()
        finished = True
    elif choice == choiceCodeExit:
        print_exit()
        finished = True
    else:
        print_invalid_choice()
