def args_kwargs(*args, **kwargs):
    print("--------------------------------")
    print("All args", args)
    print("All kwargs", kwargs)
    print("--------------------------------")


args_kwargs(45, 39, a=2, b=30)