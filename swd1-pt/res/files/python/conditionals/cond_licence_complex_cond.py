age = int(input("Please enter your age:"))
hasProvisional = input("Do you have a provisional licence (y/n):")
if age >= 17 and hasProvisional == "y":
    print("You are eligible for a driving licence.")
else:
   print("You are not eligible for a driving licence.")