REQ_LIST_LEN = 6

# input the item list and check its length
itemList = input("Please the list of {} items to be rated, separated by spaces: ".format(REQ_LIST_LEN)).split()
if (len(itemList) != REQ_LIST_LEN):
    print("The specified list does not contain {} items.".format(REQ_LIST_LEN))
# continue only if the length is as required
else:
    # print out the item ids and items
    print("----------------------------\nItem ids:")
    for index in range(REQ_LIST_LEN):
        print(index + 1, itemList[index])
    print("----------------------------\n")

    try:
        # get the preference lists for the user and the friend
        idPrefLists = []
        people = ["your", "your friend's"]
        for person in people:
            idPrefLists.append(list(map(int, input("Please enter the item ids in order of {} preference for the items, separated by spaces: ".format(person)).split())))
            if not all([ident == i + 1 for i, ident in enumerate(sorted(idPrefLists[-1]))]):
                raise ValueError()
    except ValueError as ve:
        print("The preference list should represent an ordering of all the item ids.")
    else:
        # order the items based on the preference lists and print them
        # we can apply a function to all the elements in a list with map
        print(idPrefLists)
        for i, idpl in enumerate(idPrefLists):
            print("The items ordered by {} preference: {}".format(people[i], ' '.join(map(lambda ident: itemList[ident - 1], idpl))))



               
