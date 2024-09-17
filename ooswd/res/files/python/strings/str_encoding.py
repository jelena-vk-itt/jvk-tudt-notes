character = input("Please enter a letter: ")
enc_key = int(input("Please enter the encoding key (an integer): "))
encoded = chr(ord(character) + enc_key)
print("Your letter, when encoded, is", encoded)
