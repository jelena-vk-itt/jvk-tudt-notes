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
