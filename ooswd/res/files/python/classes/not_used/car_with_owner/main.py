from car import Car
from person import Person

amy = Person("Amy", "1 Long Street")
ben = Person("Ben", "2 Wide Avenue")

amysCar = Car("toyota", "corolla", "silver", 5, amy, "betsy")
bensCar = Car("hyundai", "accent", "red", 7, ben, "mr cool")

print("amy")
amysCar.start()
amysCar.gas()

print("")
print("ben")
bensCar.start()
bensCar.gas()

