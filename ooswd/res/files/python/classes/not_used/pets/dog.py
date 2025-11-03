from pet import Pet

class Dog(Pet):
    def __init__(self):
        super().__init__()
        self.name = "dog"
        
    def feed_times(self):
        return [ "19:00" ]
        
    def walk_times(self):
        return [ "8:00", "18:00" ]

    
