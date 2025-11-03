from person import Person
from address import Address
from kk import KrisKindle

kk = KrisKindle()

kk.addPerson(Person("Annie", "Apple", Address("2", "The Orchard", "Atown", "AA", "ABC789")))
kk.addPerson(Person("Bob", "Builder", Address("1", "Site", "Btown", "BB", "XYZ123")))
kk.addPerson(Person("Cassie", "Carey", Address("3", "Long Road", "City", "CC", "ABC123")))
kk.addPerson(Person("Dan", "Duster", Address("2", "Narrow Street", "City", "DD", "MNO333")))
kk.draw()
kk.printAssignments()
