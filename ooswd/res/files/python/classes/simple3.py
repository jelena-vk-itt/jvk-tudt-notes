class Simple:
    x = "a"
    y = "b"

    def __init__(self):
        self.num1 = 1
        self.num2 = 3

    def print(self, heading):
        print("----- {} -----".format(heading))
        print("x is: ", self.x)
        print("y is: ", self.y)
        print("num1 is: ", self.num1)
        print("num2 is: ", self.num2)
        print("z is: ", self.z)
        
s1 = Simple()
s2 = Simple()

print("")

s1.z = "c"

# the following line creates the variable z on the object s2
s2.z = "d" 

s1.print("s1 after adding variable z to both objects s1 and s2")
s2.print("s2 after adding variable z to both objects s1 and s2")




