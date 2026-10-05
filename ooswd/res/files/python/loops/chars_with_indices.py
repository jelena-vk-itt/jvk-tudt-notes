text = input("Please enter some text: ")
index = 0
while index < len(text):
    print(f"{index + 1}: {text[index]}")
    index += 1
