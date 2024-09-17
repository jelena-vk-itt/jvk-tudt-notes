# check if the string in x is numeric (without regular expressions)
(x.strip().replace('-', '', 1).replace('+', '', 1).replace('.', '', 1) + x.strip().find('-')  * 'A' + x.strip().find('+') * 'B').isnumeric()

# check if the string in x is an integer (without regular expressions)
(x.strip().replace('-', '', 1).replace('+', '', 1) + x.strip().find('-') * 'A' + x.strip().find('+') * 'B').isnumeric()

# check if the string in x is a non-negative integer (without regular expressions)
(x.strip().replace('+', '', 1) + x.strip().find('+') * 'B').isnumeric()
