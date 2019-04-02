#Decorators allows us to decorate a function

def new_decorator(func):
    def wrap_func():
        print("Some code before decorator func")

        func()

        print("Some code after decorator func")

    return wrap_func


@new_decorator
def func_needs_decorator():
    print("Please decorate me!!")

# func_needs_decorator = new_decorator(func_needs_decorator)
# @new_decorator replaces above line

func_needs_decorator()