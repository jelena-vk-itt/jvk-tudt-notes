import csv

personFile = open("people.csv")
csvReader = csv.reader(personFile, delimiter=",")
for row in csvReader:
    print(row)
