class Address:
    def __init__(self, n, s, t):
        self.number = n
        self.street = s
        self.town = t

class Person:
    def __init__(self, n, s, a):
        self.name = n
        self.surname = s
        self.address = a

    def print(self):
        print("")
        print(self.name, self.surname)
        print(self.address.number, self.address.street, self.address.town)

address = Address(2, "The Street", "The Town")
person = Person("Art", "Dodger", address)
person.print()

newPerson = Person("Nancy", "Who", "4 Long Street Mars")
newPerson.print()

# the newPerson printing results in an error
# because the wrong type of address was passed
# into its constructor call
