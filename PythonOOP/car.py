class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0
    def taxrate(self):
        if self.price > 10000:
            self.tax = 0.15;
        else:
            self.tax = 0.12;
        return self
    def display_all(self):
        print "price:", self.price
        print "Speed:", self.speed,"mph"
        print "Fuel:", self.fuel
        print "Mileage", self.mileage,"mpg"
        print "Tax:", self.tax
        return self


car1=Car(2000, 35, "Full", 15)
car2=Car(2000, 5, "Not Full", 105)
car3=Car(2000, 15, "Kind of Full", 95)
car4=Car(2000, 25, "Full", 25)
car5=Car(2000, 45, "Empty", 25)
car6=Car(2000, 35, "Empty", 15)
car1.taxrate().display_all()
car2.taxrate().display_all()
car3.taxrate().display_all()
car4.taxrate().display_all()
car5.taxrate().display_all()
car6.taxrate().display_all()
