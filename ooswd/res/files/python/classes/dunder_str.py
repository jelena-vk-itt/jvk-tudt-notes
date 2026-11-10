class Product:
    LOW_STOCK_MARK = 3

    def __init__(self, name, stock):
        self.name = name
        self.stock = stock

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name

    @property
    def stock(self):
        return self._stock

    @stock.setter
    def stock(self, stock):
        self._stock = stock

    def __str__(self):
        return f"The product is {self.name} and there are {self.stock} in stock."

    def stock_is_low(self):
        return self._stock <= Product.LOW_STOCK_MARK

p = Product("bread", 10)
print(p)