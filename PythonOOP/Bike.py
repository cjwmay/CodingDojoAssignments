class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayinfo(self):
        print self.price, self.max_speed, self.miles
        return self
    def ride(self):
        self.miles+=10
        print "Riding"
        return self
    def decrease(self):
        self.miles-=5
        print "Reversing"
        return self

bike1=Bike(200,"25mph")
bike2=Bike(200,"25mph")
bike3=Bike(200,"25mph")
#bike1.displayinfo()
#bike1.ride()
#bike1.decrease()
bike1.ride().ride().ride().decrease().displayinfo()
bike2.ride().ride().decrease().decrease().displayinfo()
bike3.decrease().decrease().decrease().displayinfo()
