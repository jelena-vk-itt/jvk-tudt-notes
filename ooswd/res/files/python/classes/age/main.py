from address import Address
from person import Person


p1 = Person("Bob", "Builder", Address("1", "Site", "Btown", "BB", "XYZ123"), 2000, 1, 1)
p1.print()
print("Bob's age: ", p1.get_age())
print("")
p2 = Person("Annie", "Apple", Address("2", "The Orchard", "Atown", "AA", "ABC789"), 2010, 1, 2)
p2.print()
print("Annie's age: ", p2.get_age())
