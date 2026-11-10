class Product:
    _LOW_STOCK_MARK = 3

    def __init__(self, name, stock):
        self.name = name
        self.stock = stock

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        if type(name) != str or name == "":
            default_name = "product" + str(Product._get_default_name_suffix())
            print(f"ERROR: Name must be a non-empty string. Value received: {name}. Setting to '{default_name}'.")
            self._name = default_name
        else:
            self._name = name

    @property
    def stock(self):
        return self._stock

    @stock.setter
    def stock(self, stock):
        if type(stock) != int or stock < 0:
            print(f"ERROR: Stock must be a non-negative whole number. Value received: {stock}. Setting to 0.")
            self._stock = 0
        else:
            self._stock = stock

    def stock_is_low(self):
        return self._stock <= Product._LOW_STOCK_MARK

    # helper returning a default name suffix
    _LAST_DEFAULT_NAME_SUFFIX = 0
    @staticmethod
    def _get_default_name_suffix():
        Product._LAST_DEFAULT_NAME_SUFFIX += 1
        return Product._LAST_DEFAULT_NAME_SUFFIX

# --- using the class ---
# create and print with valid arguments
p_ok = Product('bread', 5)
print(f"Name: {p_ok.name}, stock: {p_ok.stock}")

# create and print with invalid name
p_inv_name = Product('', 5)
print(f"Name: {p_inv_name.name}, stock: {p_inv_name.stock}")

# create and print with invalid stock
p_inv_stock = Product('milk', -5)
print(f"Name: {p_inv_stock.name}, stock: {p_inv_stock.stock}")
