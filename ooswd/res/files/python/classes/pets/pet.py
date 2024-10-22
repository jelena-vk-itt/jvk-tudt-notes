class Pet:
    def __init__(self):
        self.name = "pet"
        
    def feed_times(self):
        return [ "12:00" ]
        
    def walk_times(self):
        return []

    def set_up_alarms(self):

        walkTimes = self.walk_times()
        feedTimes = self.feed_times() 

        # set alarms, then:

        print("Pet: ", self.name)
        if (len(ftms) > 0):
            print("Feed alarms set for: ", ", ".join(feedTimes))
        else:
            print("There are no feed times for this pet.")

        if (len(wtms) > 0):
            print("Walk alarms set for: ", ", ".join(walkTimes))
        else:
            print("There are no walk times for this pet.")


    


    
