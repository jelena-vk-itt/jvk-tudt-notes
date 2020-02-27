
# print("Please enter a radius value.")
# radius = float(input())

radius = -1
while radius < 0:
    print("Please enter a radius value.")
    radius = float(input())

print("The area of your circle is " + str(3.14 * radius**2))