print("---------- EXPENSES ----------")
expenses = 0

has_another = 'y'

while has_another == 'y':
    receipt_value = int(input("Enter the receipt value: "))
    expenses += receipt_value

    has_another = input("Do you have another receipt (y/n)? ")

print(f"Total expenses: {expenses}")
