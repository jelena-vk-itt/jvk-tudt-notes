# read the required input into variables
lg = int(input("Please enter the garden length in meters: "))
wg = int(input("Please enter the garden width in meters: "))
lh = int(input("Please enter the house length in meters: "))
wh = int(input("Please enter the house width in meters: "))

# do the calculations
mowSpeed = 0.5
mowTimeSeconds = (lg * wg - lh * wh) / mowSpeed
mowTimeMinutes = mowTimeSeconds // 60
mowTimeSeconds = mowTimeSeconds % 60

# we use the formatting '.0f' to tell the format function that we want the float numbers to be displayed rounded to whole values
print("It will take {0:.0f} minutes and {1:.0f} seconds to mow the garden".format(mowTimeMinutes, mowTimeSeconds))
