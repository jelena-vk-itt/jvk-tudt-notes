from collections import deque
from random import randint

ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
MAX_COUNT = 10

# class Source
# Its work is to generate lower case letters
class Source:
    def __init__(self, u):
        self.upper = u

    # function do_work
    # Does the work of the class
    def do_work(self):
        # the number of letters to be created is random number between 1 and 10
        for iteration in range(randint(1, MAX_COUNT)):
            # each generated letter
            #     is a random letter from ALPHABET
            #     is placed on the queue of the downstream Upper object
            self.upper.queue_work(ALPHABET[randint(0, len(ALPHABET) - 1)])

# class Upper
# Its work is to convert the received lower case letters to upper case
class Upper:
    def __init__(self, s):
        self.storer = s
        self.queue = deque()

    # function do_work
    # Does the work of the class
    def do_work(self):
        # the number of letters that is processed from the queue is a random
        # number between 1 and 10, or the length of the queue, whichever is smaller
        for iteration in range(min(randint(1, MAX_COUNT), len(self.queue))):
            # each letter taken off own queue
            #     is converted to upper case with upper()
            #     is placed on the queue of the downstream Storer object
            self.storer.queue_work(self.queue.popleft().upper())

    # function queue_work
    # Allows callers to place letters on the internal queue
    def queue_work(self, item):
        self.queue.append(item)

    # function queue_length
    # Returns the current length of the internal queue
    def queue_length(self):
        return len(self.queue)

# class Storer
# Its work is to store the letters that are placed on its internal queue
class Storer:
    def __init__(self):
        self.queue = deque()
        self.store = set()

    # function do_work
    # Does the work of the class
    def do_work(self):
        for iteration in range(min(randint(1, MAX_COUNT), len(self.queue))):
            self.store.add(self.queue.popleft())

    # function do_work
    # Does the work of the class
    # each letter taken off own queue
    #     is stored in the internal store of type set
    #     (so that there would be  one copy only of each stored letter)
    def queue_work(self, item):
        self.queue.append(item)

    # function queue_length
    # Returns the current length of the interal queue
    def queue_length(self):
        return len(self.queue)

    # function get_store
    # Returns the stored letters in a list
    def get_store(self):
        return sorted(list(self.store))

# create an object of each class and connect them as intended
storer = Storer()
upper = Upper(storer)
source = Source(upper)

# print the names of the queues at the top of the queue visualisation
print("\n{:<50}{:<50}".format("Upper object queue", "Storer object queue"))
print("-"*100)
# the main loop of the program, which gets the objects to do their work in sequence
for i in range(20):
    source.do_work()
    upper.do_work()
    storer.do_work()
    # visualisation of the two queues
    print("{:<50}{:<50}".format('o' * upper.queue_length(), 'o' * storer.queue_length()))

# print the alphabet letters that were not received by employing a list comprehension
received = storer.get_store()
print("Not received: ", [letter for letter in ALPHABET if letter.upper() not in received])
