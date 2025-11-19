class ListLengthError(ValueError):
    pass
class DuplicatesError(ValueError):
    pass

def order_items(items, order_of_indices):
    if len(items) != len(order_of_indices):
        raise ListLengthError()
    if len(set(order_of_indices)) != len(items):
        raise DuplicatesError()
    if any([i < 0 for i in order_of_indices]):
        raise ValueError()
    return [items[pref] for pref in order_of_indices]

itemList = input("Please enter the list of items to be rated, separated by spaces: ").split()
if len(itemList) < 2:
    print("ERROR: There must be at least two items in the list.")
    exit(1)

print("----------------------------\nItem ids:")
for index, item in enumerate(itemList):
    print(f"{index + 1} {item}")

userPrefList = input("Please enter the item ids in order of your preference for the items, separated by spaces: ").split()

try:
    intPrefs = [int(pref) - 1 for pref in userPrefList]
    printString = '\n'.join(order_items(itemList, intPrefs))
except ListLengthError:
    print("ERROR: The number of ordered item ids is different from the number of items.")
except DuplicatesError:
    print("ERROR: The item ids must be unique.")
except (ValueError, IndexError):
    print("ERROR: The ids must be valid.")
else:
    print("----------------------------")
    print("The items ordered by your preference:")
    print(printString)
print("----------------------------")
