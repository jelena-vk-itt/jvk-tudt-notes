def read_items():
    items = input("Enter a list of more than 1 items to be rated, separated by spaces: ").split()
    if len(items) < 2:
        raise ValueError("There should be at least two items in the list.")
    return items

def read_order(items):
    print("\nItem ids:\n")
    print("".join([f"{index + 1} {item}\n" for index, item in enumerate(items)]))
    count = len(items)
    preference_strs = input("Enter the item ids in order of your preference for the items, separated by spaces: ").split()
    if sorted(preference_strs) != [str(i) for i in range(1, count + 1)]:
        raise ValueError(f"The preference list must contain all ids from 1 to {count} and nothing else.")

    return [int(int_str) for int_str in preference_strs]

def order_items(items, pref_nums):
    return [items[num - 1] for num in pref_nums]

def print_ordered(items):
    print(f"The items, ordered by your preference: {" ".join(items)}")

item_list = None
ord_list = None
while not item_list:
    try:
        item_list = read_items()
    except ValueError as ve:
        print(ve, end=" ")
        print("Try again.")
    else:
        while not ord_list:
            try:
                ord_list = read_order(item_list)
            except ValueError as ve:
                print(ve, end=" ")
                print("Try again.")
            else:
                print_ordered(order_items(item_list, ord_list))






