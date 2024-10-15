from person import Person
from address import Address

class Team:

    def __init__(self, data):
        self.teamMembers = list(map(lambda d: Person(*d[:2], Address(*d[2:7]), *d[7:]), data))



