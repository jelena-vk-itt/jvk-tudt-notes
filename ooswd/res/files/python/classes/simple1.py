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
s.print()



