def read_items():
    items = input("Enter a list of items to be rated, separated by spaces: ").split()
    if len(items) < 2:
        raise ValueError("The list must contain at least two items.")
    return items

def read_pref_ids(items):
    print("Item ids: ")
    print("\n".join([f"{index + 1} {item}" for index, item in enumerate(items)]))
    pref_ids = input("Enter the item ids in order of your preference for the items, separated by spaces: ").split()
    if sorted(pref_ids) != [str(num) for num in range(1, len(items) + 1)]:
        raise ValueError("The list must contain all ids and nothing else.")
    return [int(pid) for pid in pref_ids]

def order_items(items, prefs):
    return [items[pid - 1] for pid in prefs]

def report_result(ordered):
    print(f"Your items in order of preference: {" ".join(ordered)}")

item_list = None
while not item_list:
    try:
        item_list = read_items()
    except ValueError as ve:
        print("ERROR: ", ve, "Try again.")
    else:
        pref_list = None
        while not pref_list:
            try:
                pref_list = read_pref_ids(item_list)
            except ValueError as ve:
                print("ERROR: ", ve, "Try again.")
            else:
                report_result(order_items(item_list, pref_list))






