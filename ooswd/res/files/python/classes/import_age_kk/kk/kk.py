from random import sample


def full_name(person):
        return person.name + " " + person.surname
    

class KrisKindle:
    
    def __init__(self):

        self.personList = []
        self.assignments = {}

        
    def addPerson(self, person):

        self.personList.append(person)

        
    def draw(self):

        if len(self.personList) > 1:
            pjumb = sample(self.personList, len(self.personList))
            for i in range(len(self.personList)):
                if i == 0:
                    self.assignments[full_name(pjumb[-1])] = full_name(pjumb[i])
                else:
                    self.assignments[full_name(pjumb[i - 1])] = full_name(pjumb[i])
        
        exit
        
    def printAssignments(self):

        for giver in self.assignments:
            print("{} --> {}".format(giver, self.assignments[giver]))


    
