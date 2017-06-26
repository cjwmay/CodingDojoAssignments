class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health=100
    def walk(self):
        self.health-=1
        return self
    def run(self):
        self.health-=5
        return self
    def display_health(self):
        print self.name, self.health
        return self
class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health+=5
        return self
class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health+=10
        return self
class Pig(Animal):
    def __init__(self, name):
        super(Pig, self).__init__(name)
        self.health = 50





#animal1=Animal("Jingwen")
#animal1.walk().walk().walk().run().run().display_health()
#dog1=Dog("luna")
#dog1.walk().walk().walk().run().run().pet().display_health()
#dragon1.walk().walk().walk().run().run().fly().fly().display_health()
pig1=Pig("lulu")
pig1.fly()
