g = 'global'


def a():
    w = 'a'
    b()
    print(w)


def b():
    x = 'b'
    c()
    print(x)


def c():
    y = 'c'
    d()
    print(y)


def d():
    z = 'd'
    print("Hello")
    raise Exception("Error before the end of d!")
    print(z)

a()
