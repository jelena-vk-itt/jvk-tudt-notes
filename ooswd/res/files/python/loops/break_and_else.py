wordList = []
word = input("Enter the first word (. to finish, --- to abandon): ")
while word != ".":
   if word == "---":
       print("Abandoning word entry.")
       break

   if not word.isalpha():
       print("Word is not purely alphabetic. Ignoring.")
   else:
       wordList += [ word ]

   word = input("Enter the first word (. to finish, --- to abandon): ")
else:
   print("Your list:", " ".join(wordList))
