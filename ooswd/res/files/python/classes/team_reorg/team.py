# changes made with respect to team/person/address setup:
# imported Employee instead of Person
# references to Person changed into references to Employee (1 instance)

from employee import Employee
from address import Address

class Team:

    def __init__(self, data):
        self.teamMembers = list(map(lambda d: Employee(*d[:2], Address(*d[2:7]), *d[7:]), data))

    def add_member(self, p):
        self.teamMembers.append(p)

    def remove_member(self, name):
        index = list(map(lambda tm: tm.name, self.teamMembers)).index(name)
        self.teamMembers.pop(index)

    def print(self, tr=""):
        list_for_printing = self.teamMembers

        if tr in ['lead', 'dev', 'ops']:
            list_for_printing = list(filter(lambda tm: tm.rit == tr, self.teamMembers))

        for index, tm in enumerate(list_for_printing):
            print("[{}]".format(index + 1))
            tm.print()


