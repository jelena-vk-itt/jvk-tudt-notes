
# program that controls a thermostat

print("Sensor, what's your temperature?")
t = int(input())
heatingOn = False
if t < 19:
    heatingOn = True
    print("The heating has been switched on.")
elif t > 22:
    heating = False
    print("The heating has been switched off.")
#   else:
#       do nothing

print("Finished!")
