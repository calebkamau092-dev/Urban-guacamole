"""
Object oriented programming.

Concept in programming to make
work easy, by using principles.

1.Incapsulation
   -hiding unnecessary complexity or importation of details.

2.Abstraction
   -While restricting direct access to internal data.
   -hiding unnecessary complexity or importation of details.

3.Inheritance
   -one class to reuse or extend propertie
   and methods of another class

4.Polymorphism
   -appearing in different forms. Method can
   have different behaviours.

JS and python are object oriented.
-> number.toString() .string-toLowerCase()
"""

# ***

# -> Class ->
# -blueprint for an object.<>

# -> Class could be an architectural drawing of a house.
#   object -> implentation of the drawing.

# ***

# #Is to have the name Capitalized
# #fields <properties>


class House:
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 4
    owner = ""
    architect = "KIMARI"

    def config(self, owner, location):
        self.owner = owner
        self.location = location

    def print_self(self):
        print(f"the object: {self} <H> selfobject >")
        print(self)
        print(self.__dict__)  # dictionary print all properties


# @when access object properties use dot notation
# #Bracket notation is for dictionaries

caleb_house = House()
# caleb_house.owner="caleb"
# caleb_house.location="Kikuyu"

caleb_house.config(owner="caleb", location="Kikuyu")
print(f"caleb's House Owner {caleb_house.owner}")
print(f"caleb's House Location {caleb_house.location}")
print(f"caleb's House Bedrooms {caleb_house.bedrooms}")
print(f"caleb's House Floors {caleb_house.floors}")
print(f"caleb's House Designer {caleb_house.architect}")
print("Printing caleb's house")
caleb_house.print_self()

print("End of print caleb's")

purity_house = House()
# purity_house.owner="purity"
# purity_house.location="Miranga"

purity_house.config(owner="purity", location="Miranga")
print(f"purity's House Owner {purity_house.owner}")
print(f"purity's House Location {purity_house.location}")
print(f"purity's House Bedrooms {purity_house.bedrooms}")
print(f"purity's House Floors {purity_house.floors}")
print(f"purity's House Designer {purity_house.architect}")
print("Printing purity's house")
purity_house.print_self()
