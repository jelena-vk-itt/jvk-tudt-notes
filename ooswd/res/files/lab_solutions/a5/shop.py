from product import Product

class Shop:

    def __init__(self, prods):
        self.products = list(map(lambda p: Product(*p), prods))

    def add_member(self, p):
        self.teamMembers.append(p)

    def remove_member(self, name):
        index = list(map(lambda tm: tm.name, self.teamMembers)).index(name)
        self.teamMembers.pop(index)

    def print(self, tr=""):
        list_for_printing = self.teamMembers

        if tr in ['lead', 'dev', 'ops']:
            list_for_printing = list(filter(lambda tm: tm.rit == tr, self.teamMembers))

        for index, tm in enumerate(list_for_printing):
            print("[{}]".format(index + 1))
            tm.print()


