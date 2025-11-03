from pet import Pet

class Cat(Pet):
    def __init__(self):
        super().__init__()
        self.name = "cat"
        
    def feed_times(self):
        return [ "7:00" ]
        

