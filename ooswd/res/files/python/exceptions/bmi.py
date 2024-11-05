try:
    name = input("Please enter your name: ")
    if len(name) == 0: raise ValueError()

    wkg = int(input("Please enter your weight in kg: "))
    if (wkg < 0): raise ValueError()    

    hcm = int(input("Please enter your height in cm: "))
    if (hcm < 1): raise ValueError()

    bmi = wkg / (hcm / 100) **2

    reportTemplate = "Thanks, {0}, your BMI is {1}"
    print(reportTemplate.format(name, round(bmi, 2)))

except ValueError as ve:
    print("Invalid value.\n--> Both weight and height must be a whole number greater than 0."
          "\n--> The name should be a non-empty string.")
