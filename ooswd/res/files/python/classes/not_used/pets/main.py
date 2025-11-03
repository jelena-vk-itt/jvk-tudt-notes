from pet import Pet
from dog import Dog
from cat import Cat

p = Pet()
d = Dog()
c = Cat()

print("-------------------------------------")
# calling a not-overridden (set_up_alarms) method on the base class,
# then an overridden method (feed_times)
# --> subclasses and their objects are ignored
p.set_up_alarms()
print("---")
print("Pet walk times: ", p.walk_times())


print("-------------------------------------")
# calling an overriding method on the subclass
# --> the subclass's method is executed
print("Dog walk times: ", d.walk_times())


print("-------------------------------------")
# calling a non-overridden method on the subclass
# --> the base class's method is executed
print("Cat walk times: ", c.walk_times())


print("-------------------------------------")
# calling overriding  methods from the base class
# --> set_up_alarms in Pet (base) calls any feed_times and walk_times
# --> defined in Cat and Dog (subclasses), otherwise defaults to its
# --> own methods
d.set_up_alarms()
print("---")
c.set_up_alarms()
