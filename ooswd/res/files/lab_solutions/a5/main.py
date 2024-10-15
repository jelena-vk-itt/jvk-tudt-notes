from shop import Address
from person import Person
from team import Team

DATA = [
    ["milk", "Fresh from the farm", 10],
    ["bread", "Fresh from the baker", 4],
    ["tea", "Box of 100 teabags", 1],
    ["eggs", "A dozen per box", 33],
    ["ice cream", "1l box, vanilla", 2]
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
