def my_args(*args):
    print(f"Args type of args{type(args)}")
    print(args)
    print(f"first arg {args[0]}")
    print("--------------------")


my_args(30, 67, 97, 100)
my_args("Hello", True, 34)


def area_rectangle(length, width):
    area = length * width
    print("--------------------")
    print(f"For rectangle with length {length} and Width {width} are is {area}")
    print("--------------------")


area_rectangle(20, 10)


def sum(a, b):
    ans = a + b


def sum2(*args):
    ans = 0
    for n in args:
        print(f"n is {n}")
        ans = ans + n
    print(f"Sum is {ans}")


sum2(29, 49, 34, 40, 69, 98)