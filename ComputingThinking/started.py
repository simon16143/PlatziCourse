class people:
    def __init__(self,age,name):
       self.age = age
       self.name = name
      
       
    def tobeHonest(self):
        if self.age <= 25:
            return (f"{self.name}, Enjoy life, go to the party")
        elif self.age > 25 and self.age < 45:
            return(f"{self.name} Hey, you're already an adult, you must pay the rent")
        elif self.age >=45:
            return(f"{self.name}, Come on pal... you must be a \"Sugar Daddy\" ")
    def long(self):
        return len(self.name)        

if __name__ == '__main__':
    name = input("Insert your name: ")
    age = int(input("Insert your age: "))
    person = people(age,name)
    print(person.tobeHonest(), f"and the length of your name is {person.long()} character")


    

  



