from address import Address
from person import Person
from team import Team

DATA = [
    ["Annie", "Apple", "2", "The Orchard", "Atown", "AA", "ABC789", 2010, 1, 2, 'dev'],
    ["Bob", "Builder", "1", "Site", "Btown", "BB", "XYZ123", 2000, 1, 1, 'ops'],
    ["Charlie", "Chime", "5", "The Hill", "Ctown", "CC", "MNO000", 1990, 3, 3, 'dev'],
    ["Danny", "Doom", "4", "The Cave", "Dtown", "DD", "@!#999", 1900, 12, 31, 'lead']
]

team = Team(DATA)
print("--- initial ---")
team.print()

team.add_member(Person("Emmy", "Eel", Address("5", "The Lake", "Etown", "EE", "LKE0000"), 1995, 5, 5, 'dev'))
print("\n--- after adding Emmy ---")
team.print()

team.remove_member('Annie')
print("\n--- after removing Annie ---")
team.print()


print("\n--- filtering by role: lead ---")
team.print('lead')

print("\n--- filtering by role: dev ---")
team.print('dev')

print("\n--- filtering by role: ops ---")
team.print('ops')
