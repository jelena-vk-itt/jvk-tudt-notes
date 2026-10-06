while True:
   word = input("Enter a word (. to finish): ")

   if word == '.':
       break

   if not word.isalpha():
       continue
   
   word_upper = word.upper()
   word_char_list = list(word_upper)
   word_spaced = ' '.join(word_char_list)
   print(word_spaced)
   
