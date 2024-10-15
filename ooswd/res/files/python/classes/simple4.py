class Simple:
    def __init__(self, n1, n2, n3):
        self.num1 = n1
        self.num2 = n2
        self.num3 = n3

    def print(self, heading=""):
        print("")
        if heading != "":
            print("----- {} -----".format(heading))
        print("num1 is: ", self.num1)
        print("num2 is: ", self.num2)
        print("num3 is: ", self.num3)


s = Simple(3, 4, 10)
s.print()
