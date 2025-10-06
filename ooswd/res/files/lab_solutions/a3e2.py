percMark = int(input("Please enter a percentage mark: "))

letterGrade = None
if percMark > 100 or percMark < 0:
    print("The percentage mark you entered is invalid.")
elif percMark < 35:
    letterGrade = 'F'
elif percMark < 40:
    letterGrade = 'D'
elif percMark < 50:
    letterGrade = 'C'
elif percMark < 55:
    letterGrade = 'C+'
elif percMark < 60:
    letterGrade = 'B-'
elif percMark < 70:
    letterGrade = 'B'
elif percMark < 80:
    letterGrade = 'B+'
else:
    letterGrade = 'A'

if letterGrade:
    print("The letter grade corresponding to percentage mark {0} is {1}".format(percMark, letterGrade))
