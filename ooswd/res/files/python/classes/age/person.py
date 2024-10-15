from datetime import datetime

class Person:

    def __init__(self, n, s, a, y, m, d):
        self.name = n
        self.surname = s
        self.address = a
        self.dob = datetime(y, m, d)

    def print(self):
        print("name is: ", self.name)
        print("surname is: ", self.surname)
        self.address.print()
        print("dob is: ", self.dob.strftime("%d/%m/%Y"))

    def get_age(self):
        date_diff = datetime.now() - self.dob
        return round(date_diff.days/365.25)



