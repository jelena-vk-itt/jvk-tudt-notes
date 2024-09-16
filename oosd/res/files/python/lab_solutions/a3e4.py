grantPSqmD = 2.5
grantPSqmS = 1.5
grantPSqmT = 1

floorAreaSqm = int(input("What is the floor area of the house? "))
if floorAreaSqm < 0:
    print("Invalid floor area")
else:

    houseType = input("What is the house type: detached (d), semi-detached (s) or terraced (t)? ")
    
    if floorAreaSqm > 150:
        floorAreaSqm = 150
        
    if houseType[0] == 'd':
        grantValue = grantPSqmD * floorAreaSqm
    elif houseType[0] == 's':
        grantValue = grantPSqmS * floorAreaSqm
    elif houseType[0] == 't':
        grantValue = grantPSqmT * floorAreaSqm
    else:
        grantValue = None
        print("Invalid house type")

    if grantValue:
        print("The home insulation grant for this house is €{0}".format(grantValue))
    
