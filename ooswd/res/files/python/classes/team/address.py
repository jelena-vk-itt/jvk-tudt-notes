class Address:
    def __init__(self, l1, l2, t, c, e):
        self.line1 = l1
        self.line2 = l2
        self.town = t
        self.county = c
        self.eircode = e

    def print(self):
        print(self.line1, self.line2, self.town, self.county, self.eircode)