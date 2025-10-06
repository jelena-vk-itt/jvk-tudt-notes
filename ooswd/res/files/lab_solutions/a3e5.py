password = "abc"
triesAllowed = 3

enteredPwd = input("Please enter the password: ")
count = 1
while enteredPwd != password and count < triesAllowed:
   enteredPwd = input("The password you entered is not correct. Please enter the password: ")
   count += 1

if enteredPwd != password:
    print("You have entered an incorrect password too many times. Please contact the administrator.")
else:
    print("Thanks. You are logged in now.")
