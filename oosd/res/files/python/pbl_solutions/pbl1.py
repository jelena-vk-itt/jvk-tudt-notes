print("*********** KeepWarm Quick Quotes ***********")

name=input("Please enter your name: ")
surname=input("Please enter your surname: ")
email=""

while not "@" in email:
    email = input("Please enter a valid email address: ")

height = float(input("Please enter the ceiling height: "))

totalWallLength = 0
more = "Y"
roomCounter = 1

while more == "Y":
    print("Room {0}".format(roomCounter))
    width = int(input("Please enter the room width: "))
    length = int(input("Please enter the room length: "))
    totalWallLength += width * 2 + length * 2
    roomCounter += 1
    more=input("Would you like to add another room [Y/N]? ")

summer = input("Would you be willing to have the work done in July or August [Y/N]? ")

price = height * totalWallLength * 50
if summer == "Y":
    price -= 150

reference = name[0].upper()
reference += surname[0:5].upper()
while len(reference) < 6:
    reference += "X"

print("Your reference: " + reference)
print("Your quote: €{0}".format(round(price)))