class Simple:
    x = "a"
    y = "b"

    def __init__(self):
        self.num1 = 1
        self.num2 = 3

    def print(self):
        print("x is: ", self.x)
        print("y is: ", self.y)
        print("num1 is: ", self.num1)
        print("num2 is: ", self.num2)


s = Simple()

# accessing the member variables
print("\n---- print variables individually from object ----")
print(s.x, s.y, s.num1, s.num2)

print("---- object before modification ----")
s.print()

# modifying the member variables
s.x = "new a"
s.y = "new b"
s.num1 = 10
s.num2 = 30

print("---- object after modification ----")
s.print()

