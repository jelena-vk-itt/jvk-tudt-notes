numList = []
end = False
while not end:                                                                 
   numStr = input("Please enter a number between 1 and 10 or 11 to stop: ") 
   if not numStr.isnumeric():                                               
      print("The input is not a whole number. It will be ignored.")         
      number = 0                                                            
   else:                                                                    
      number = int(numStr)                                                  
      if number < 1 or number > 11:                                         
          print("The number is not in range. It will be ignored.")          
      elif number < 11:                                                                 
          numList += [ number ]
      else:       # number is 11
          end = True

print("Your number list: ", ' '.join(map(str, numList)))                    
