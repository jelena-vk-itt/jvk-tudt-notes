from random import sample


# helper function to put the name and surname together into one string
def full_name(person):
    return person.name + " " + person.surname
    

class KrisKindle:
    
    def __init__(self):

        # the persons are stored in a list
        self.personList = []
        # the assignments are stored in a dictionary
        self.assignments = {}

        
    def addPerson(self, person):

        self.personList.append(person)

        
    def draw(self):

        if len(self.personList) > 1:
            pjumb = sample(self.personList, len(self.personList))
            for i in range(len(self.personList)):
                # create assignments in the dictionary
                # each person is assigned to the person before them except 
                # person at index 0, who is assigned to the last person
                if i == 0:
                    self.assignments[full_name(pjumb[-1])] = full_name(pjumb[i])
                else:
                    self.assignments[full_name(pjumb[i - 1])] = full_name(pjumb[i])

                    
    def printAssignments(self):

        for giver in self.assignments:
            print("{} --> {}".format(giver, self.assignments[giver]))


    
