while True:
   word = input("Enter a word (. to finish): ")

   if word == '.':
       break

   if not word.isalpha():
       continue
   
   print(word.upper())
   
