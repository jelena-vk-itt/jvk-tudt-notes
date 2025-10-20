# set construction
s1 = {'chair', 'table', 'lamp', 'carpet', 'bookcase'}
s2 = {el for el in ['bookcase', 'sofa', 5, 'lamp', 'armchair', 2, 22] if type(el) == str}
s3 = set(['chair', 'table'])

# length, membership
len(s1)         # expected output: 5
'chair' in s1   # expected output: True
'blah' in s1    # expected output: False


# check if s3 is a subset of s1, expected output: True
# operation
s3 <= s1
# method
s3.issubset(s1)

# get the union of s1 and s2, expected output (order could be different): {'chair', 'table', 'lamp', 'carpet', 'bookcase', 'sofa', 'armchair'} 
# operation
s1 | s2
# method
s1.union(s2)


# get the intersection of s1 and s2, expected output (order could be different): {'lamp', 'bookcase'}
# operation
s1 & s2
# method
s1.intersection(s2)
