class Address:
    def __init__(self, l1, l2, t, c, e):
        self.line1 = l1
        self.line2 = l2
        self.town = t
        self.county = c
        self.eircode = e

    def print(self):
        print(self.line1, self.line2, self.town, self.county, self.eircode)




class Person:

    def __init__(self, n, s, a):
        self.name = n
        self.surname = s
        self.address = a

    def print(self):
        print("")
        print("name: ", self.name)
        print("surname: ", self.surname)
        self.address.print()



p1 = Person("Bob", "Builder", Address("1", "Site", "Btown", "BB", "XYZ123"))
p1.print()

p2 = Person("Annie", "Apple", Address("2", "The Orchard", "Atown", "AA", "ABC789"))
p2.print()
