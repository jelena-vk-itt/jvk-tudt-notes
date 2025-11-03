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

address = Address(3, "Long Road", "Smalltown")
person = Person("Johnny", "McGorey", address)
person.print()
