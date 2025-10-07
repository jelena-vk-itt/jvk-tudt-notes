nonMotorised = [ "rollerblades", "bicycle", "scooter", "sail wagon", "legs" ]

for mode in nonMotorised:
   print("😊", mode)


nonMotorisedEnum = enumerate(nonMotorised)

# notice that the enumeration does not need to be converted
# to a list to be used in a for loop 
for modeTuple in nonMotorisedEnum:
   # increase index by 1 (we don't want to start at 0!)
   print(modeTuple[0] + 1, modeTuple[1])
