# changes with respect to team/person/address setup
# this is a new file

from person import Person

class Employee(Person):

    def __init__(self, n, s, a, y, m, d, r):
        super().__init__(n, s, a, y, m, d)
        self.rit = r


    def print(self):
        super().print()
        print("role in team: ", self.rit)

