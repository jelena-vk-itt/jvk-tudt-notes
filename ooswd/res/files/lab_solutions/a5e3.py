from a5e1 import write_table
from a5e2 import calculator

def is_valid_integer(num_string):
    if num_string[0] == '-':
        num_string = num_string[1:]
    return num_string.isdigit()

def read_integer(prompt):
    input_string = input(prompt)
    if input_string == '.':
        return None
    while not is_valid_integer(input_string):
        input_string = input("Invalid value. " + prompt)
        if input_string == '.':
            return None
    return int(input_string)

def read_positive_integer(prompt):
    input_string = input(prompt)
    if input_string == '.':
        return None
    while not input_string.isdigit() or int(input_string) == 0:
        input_string = input("Invalid value. " + prompt)
        if input_string == '.':
            return None
    return int(input_string)

def read_operation():
    prompt = "Enter an operation (+, -, * or /) or '.' to cancel: "
    input_string = input(prompt)
    if input_string == '.':
        return None
    while input_string not in ['+', '-', '*', '/']:
        input_string = input("Invalid value. " + prompt)
        if input_string == '.':
            return None
    return input_string


def print_menu():
    print("--------------")
    print("(1) table")
    print("(2) arithmetic")
    print("(3) exit")
    print("--------------")

def read_choice():
    c = input("Enter a choice (1-3): ")
    while c not in ['1', '2', '3']:
        c = input("Invalid choice. Enter a number between 1 and 3: ")
    return c

while True:
    print_menu()
    choice = read_choice()
    if choice == '1':
        num_cols = read_positive_integer("Enter the number of columns, or '.' to cancel: ")
        if num_cols:
            num_rows = read_positive_integer("Enter the number of rows, or '.' to cancel: ")
            if num_rows:
                write_table(num_cols, num_rows)
    elif choice == '2':
        num1 = read_integer("Enter the first integer, or '.' to cancel: ")
        if num1:
            num2 = read_integer("Enter the second integer, or '.' to cancel: ")
            if num2:
                op = read_operation()
                if op:
                    res = calculator(num1, num2, op)
                    print(f"The result is: {res}")
    elif choice == '3':
        break
