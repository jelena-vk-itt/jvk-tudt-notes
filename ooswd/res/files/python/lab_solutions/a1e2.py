name = input("Please enter your name: ")
wkg = int(input("Please enter your weight in kg: "))
hcm = int(input("Please enter your height in cm: "))

bmi = wkg / (hcm / 100) **2

reportTemplate = "Thanks, {0}, your BMI is {1}"
print(reportTemplate.format(name, round(bmi, 2)))
          
