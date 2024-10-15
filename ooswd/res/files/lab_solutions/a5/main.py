from shop import Shop

DATA = [
    ["milk", "Fresh from the farm", 10],
    ["bread", "Fresh from the baker", 4],
    ["tea", "Box of 100 teabags", 1],
    ["eggs", "A dozen per box", 33],
    ["ice cream", "1l box, vanilla", 2]
]

s = Shop(DATA)

s.print_product_list()
s.print_low_on_stock()

print("\nAdding product cake...", end="")
s.add_product("cake", "Coffee and walnut", 1)
print("added.")

s.print_product_list()
s.print_low_on_stock()

print("\nRemoving product tea...", end="")
s.remove_product("tea")
print("removed.")

s.print_product_list()
s.print_low_on_stock()




