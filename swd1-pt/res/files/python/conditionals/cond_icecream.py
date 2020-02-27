
# program that checks eligibility for oap discount on ice cream

print("How many scoops would you like?")
n = int(input())
p = float(n) * 1.2
print("Are you over 65 [y/n]?")
o = input()
if o == 'y':
    p *= 0.8

print("Please pay ", p)

