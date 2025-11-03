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

    def move(self):
        self.address.number += 1

address = Address(3, "Long Road", "Smalltown")
johnny = Person("Johnny", "McGorey", address)
mary = Person("Mary", "Berry", address)
johnny.print()
mary.print()

print()

johnny.move()
johnny.print()
mary.print()
