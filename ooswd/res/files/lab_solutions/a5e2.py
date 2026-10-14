def calculator(num1, num2, op):
    if op not in ['+', '-', '*', '/']:
        print("Invalid argument 3: this should be one of '+', '-', '*' and '/'.")
        return None

    if op == '+':
        return num1 + num2
    if op == '-':
        return num1 - num2
    if op == '*':
        return num1 * num2
    if op == '/':
        return num1 / num2

if __name__ == "__main__":
    print(calculator(-1, 2, '+'))
    print(calculator(-1, 2, '-'))
    print(calculator(-1, 2, '*'))
    print(calculator(-1, 2, '/'))

    print(calculator(-1, 2, '**'))




