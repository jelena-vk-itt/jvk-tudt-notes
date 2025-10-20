

def calculate(num1, num2, op):

    if not num1.isdigit() or not num2.isdigit() or not op in ['+', '-', '*', '/']:
        print("The function requires two integers followed by a valid operation (+, -, *, /) as arguments.")
        return None

    if op == '+':
        return int(num1) + int(num2)

    if op == '-':
        return int(num1) - int(num2)

    if op == '*':
        return int(num1) * int(num2)

    if op == '/':
        return int(num1) / int(num2)


#-------------- start of main program ------------------------
num1 = input("Please enter the first number: ")
num2 = input("Please enter the second number: ")
op = input("Please enter the operation: ")

result = calculate(num1, num2, op)
if result:
    print("The result of the operation is " + str(result))



# TESTS, in terms of entered values:
# 2, 3, +
# 2.2, 3, +
# 2, a, +
# 2, 3, x
# 2, 3, -
# 2, 3, *
# 2, 3, /






    
