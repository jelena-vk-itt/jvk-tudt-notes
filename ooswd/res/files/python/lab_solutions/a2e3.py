itemList = input("Please the list of 5 items to be rated, separated by spaces: ").split()
print("----------------------------\nItem ids:\n1 {0}\n2 {1}\n3 {2}\n4 {3}\n5 {4}\n----------------------------".format(itemList[0], itemList[1], itemList[2], itemList[3], itemList[4]))
userPrefList = input("Please enter the item ids in order of your preference for the items, separated by spaces: ").split()
friendPrefList = input("Please enter the item ids in order of your friend's preference for the items, separated by spaces: ").split()
print("----------------------------")
print("The items ordered by your preference: {0} {1} {2} {3} {4}".format(
    itemList[int(userPrefList[0]) - 1],
    itemList[int(userPrefList[1]) - 1],
    itemList[int(userPrefList[2]) - 1],
    itemList[int(userPrefList[3]) - 1],
    itemList[int(userPrefList[4]) - 1]))
print("The items ordered by your friend's preference: {0} {1} {2} {3} {4}".format(
    itemList[int(friendPrefList[0]) - 1],
    itemList[int(friendPrefList[1]) - 1],
    itemList[int(friendPrefList[2]) - 1],
    itemList[int(friendPrefList[3]) - 1],
    itemList[int(friendPrefList[4]) - 1]))
print("----------------------------")








