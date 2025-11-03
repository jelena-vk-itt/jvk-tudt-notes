class X:
    currID = 0

    def __init__(self, name):
        self.name = name
        X.currID += 1
        self.id = X.currID


    def print(self):
        print("id: {}, name: {}".format(self.id, self.name))
        

a = X("a")
b = X("b")
c = X("c")

a.print()
b.print()
c.print()
