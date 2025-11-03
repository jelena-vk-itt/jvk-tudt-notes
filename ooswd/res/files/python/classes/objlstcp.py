import copy

class Address:
    def __init__(self, n, s, t):
        self.number = n
        self.street = s
        self.town = t

    def print(self):
        print("Address: {} {}, {}".format(self.number, self.street, self.town))

class Person:
    def __init__(self, n, s, a):
        self.name = n
        self.surname = s
        self.address = a

    def print(self):
        print("Name: {} {}".format(self.name, self.surname))
        self.address.print()


# this function uses a dictionary but there are other ways of implementing this
def print_person_lists(person_list_dictionary):

    for key in person_list_dictionary:
        print()
        print(key)
        print("----------")
        for p in person_list_dictionary[key]:
            p.print()


persLst = [
    Person("John", "Doe", Address(1, "John's Lane", "Bigtown")),
    Person("Jane", "Dale", Address(2, "Janey Street", "Bigtown")),
    Person("Jan", "Drake", Address(3, "Jannes Avenue", "Biggerton"))
]

persLstShallowCopy = persLst.copy()
persLstDeepCopy = copy.deepcopy(persLst)

dictOfLists = {
    "original": persLst,
    "shallow_copy": persLstShallowCopy,
    "deep_copy": persLstDeepCopy
}

print("--- Before modification ---")
print_person_lists(dictOfLists)


print()

# make modification
persLst[0].surname = "Doodle"
print("--- After modification ---")
print_person_lists(dictOfLists)

print()

# replace object
persLst[1] = Person("Nora", "Newton", Address(4, "New Street", "Newtown"))
print("--- After replacement ---")
print_person_lists(dictOfLists)

