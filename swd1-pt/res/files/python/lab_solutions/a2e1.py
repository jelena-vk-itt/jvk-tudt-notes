lg = int(input("Please enter the garden length in meters: "))
wg = int(input("Please enter the garden width in meters: "))
lh = int(input("Please enter the house length in meters: "))
wh = int(input("Please enter the house width in meters: "))

mowSpeed = 0.5
mowTime = (lg * wg - lh * wh) / mowSpeed

print("It will take approximately {0} seconds to mow the garden".format(mowTime))
