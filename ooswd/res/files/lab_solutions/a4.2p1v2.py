groceries = [
    ["bread", "A delicious 500g brown loaf.", 1.0],
    ["milk", "A litre carton of low fat milk.", 1.5],
    ["eggs", "10 free range eggs in a cardboard box.", 2.3],
    ["oats", "500g of porridge oats in paper packaging.", 2.2],
    ["nuts", "100g packet of walnuts.", 3.0]
]
choiceCodeSubmit = str(len(groceries) + 1)
choiceCodeExit = str(len(groceries) + 2)
order = [0] * len(groceries)
price = 0


def print_grocery_item(index, ids=True, quantity=False):
    item = groceries[index]
    text = ""
    if ids:
        text += "{0}: ".format(index + 1)
    text += "{0: <10} {1: <45} €{2: <7}".format(item[0], item[1], item[2])
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
    for index in sorted(range(len(order)), key=lambda   : groceries[i][2], reverse=True):
        if order[index] > 0:
            print_grocery_item(index, ids=False, quantity=True)
    print("Total: €{:.2f}".format(price))
    print("Thank you for your order :-). It will be delivered shortly.")

def prompt_choice():
    return input("\nChoose a grocery you wish to buy (1-{0}), "
                 "to submit order ({1}) or to exit ({2}): ".
                 format(len(groceries), len(groceries) + 1, len(groceries) + 2))

def prompt_quantity():
    return input("\nPlease specify the quantity: ")


print_empty = lambda: print("Your order is empty, cancelling.")
print_zero = lambda: print("The quantity specified is zero. Your basket is unchanged.")
print_inv_quantity = lambda: print("The quantity you entered is invalid. Try again.")
print_exit = lambda: print("Thank you. Exiting...")
print_inv_choice = lambda: print("Invalid choice, try again.")

finished = False
while not finished:
    print_menu()
    choice = prompt_choice()
    if choice in map(str, range(1, len(groceries) + 1)):
        index = int(choice) - 1
        print_grocery_item(index, ids=False)
        quantity = prompt_quantity()
        if quantity.isdigit():
            quantity = int(quantity)
            if quantity == 0:
                print_zero()
            elif quantity < 0:
                print_inv_quantity()
            else:
                order[index] += quantity
        else:
            print_inv_quantity()
                
    elif choice == choiceCodeSubmit:
        if sum(order) > 0:
            for i, q in enumerate(order):
                price += groceries[i][2] * order[i]
            print_order()
        else:
            print_empty()
        finished = True
    elif choice == choiceCodeExit:
        print_exit()
        finished = True
    else:
        print_inv_choice()
