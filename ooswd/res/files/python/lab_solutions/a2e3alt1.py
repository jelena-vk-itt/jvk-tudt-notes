itemList = input("Please the list of 5 items to be rated, separated by spaces: ").split()
print("----------------------------\nItem ids:\n1 {0}\n2 {1}\n3 {2}\n4 {3}\n5 {4}\n----------------------------".format(itemList[0], itemList[1], itemList[2], itemList[3], itemList[4]))
userPrefList = input("Please enter the item ids in order of your preference for the items, separated by spaces: ").split()
friendPrefList = input("Please enter the item ids in order of your friend's preference for the items, separated by spaces: ").split()
print("----------------------------")

# we can apply a function to all the elements in a list with map(), casting the returned iterable to a list
userList = list(map(lambda pref : itemList[int(pref) - 1], userPrefList))
friendList = list(map(lambda pref : itemList[int(pref) - 1], friendPrefList))

# we can join the items from the list by calling join on an object representing the separator (in our case ' ')
print("The items ordered by your preference: ", ' '.join(userList))
print("The items ordered by your friend's preference: ", ' '.join(friendList))


               
