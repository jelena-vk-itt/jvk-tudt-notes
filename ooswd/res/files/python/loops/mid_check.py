print("---------- SENTENCES ----------")
sentences = []

while True:
    sentence = input("Enter a sentence or '.' to end: ")

    if sentence  == '.':
        break

    sentences += [ sentence ]

print(f"Your sentences: \n{'\n'.join(sentences)}")
