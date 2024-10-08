groceries = [
    ["bread", "A delicious 500g brown loaf.", 1.0],
    ["milk", "A litre carton of low fat milk.", 1.5],
    ["eggs", "10 free range eggs in a cardboard box.", 2.3],
    ["oats", "500g of porridge oats in paper packaging.", 2.2],
    ["nuts", "100g packet of walnuts.", 3.0]
]

finished = False
order = []
while not finished:
    print("\n********* Groceries at your Fingertips: Shop *********")
    for i, item in enumerate(groceries):
        print("{0}: {1: <10} {2: <45} €{3: <7}".format(i+1, item[0], item[1], item[2]))

    print("{0}: submit order".format(len(groceries) + 1))
    print("{0}: exit".format(len(groceries) + 2))

    choice = int(input("\nChoose a grocery you wish to buy (1-{0}), to submit order ({1}) or to exit ({2}): ".format(len(groceries), len(groceries) + 1, len(groceries) + 2)))

    if choice < 6:
        index = choice - 1
        item = groceries[index]
        print("\n{0: <10} {1: <45} €{2: <7}".format(item[0], item[1], item[2]))
        quantity = int(input("\nPlease specify the quantity: "))
        if quantity > 0:
            order.append([index, quantity])
        print("")
    elif choice == 6:
        if len(order) > 0:
            # sort items in order and display
            sorted_order = sorted(order, key=lambda x: groceries[x[0]][2], reverse=True)
            print("\n\nYour order:\n--------------------")
            for orderedItem in sorted_order:
                groceryInfo = groceries[orderedItem[0]]
                print("{0: <10} {1: <45} €{2: <7} quantity: {3}".format(groceryInfo[0], groceryInfo[1], groceryInfo[2], orderedItem[1]))
            # loop through the order to calculate the price
            price = 0
            for groceryInOrder in order:
                price += groceries[groceryInOrder[0]][2] * groceryInOrder[1]
            # display summary info
            print("Total: €{:.2f}".format(price))
            print("Thank you for your order :-). It will be delivered shortly.")
        else:
            print("Your order is empty, cancelling.")
        finished = True
    else:
        finished = True




