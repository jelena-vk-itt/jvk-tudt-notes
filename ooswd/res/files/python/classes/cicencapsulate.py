class Address:
    def __init__(self, n, s, t):
        self.number = n
        self.street = s
        self.town = t

    def print(self):
        print(self.number, self.street, self.town)
        
        
class Person:
    def __init__(self, n, s, a):
        self.name = n
        self.surname = s
        self.address = a

    def print(self):
        print("")
        print(self.name, self.surname)
        self.address.print()

address = Address(2, "The Street", "The Town")
person = Person("Art", "Dodger", address)
person.print()

