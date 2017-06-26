//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

class Animal{
    var name:String
    var health = 100
    init(name:String) {
        self.name = name
    }
    func display_health() ->Self{
        print("Health is\(self.health)")
        return self
    }
}
class Cat:Animal{
    init(catName:String) {
        super.init(name: catName)
        self.health = 150
    }
    func growl() ->Self{
        print("Rawr!")
        return self
    }
    func run() ->Self{
        if self.health>=10{
            self.health-=10
            print("Running")
            return self
        }
        return self
    }
}

class Lion:Cat{
    init(lionName:String) {
        super.init(catName: lionName)
        self.health = 200
    }
    override func growl() ->Self{
        print("ROAR!!!!I am the king of the Jungle")
        return self
    }
}

class Cheetah:Cat{
    init(cheetahName:String){
        super.init(catName: cheetahName)
        self.health = 200
    }
    override func run() ->Self{
        if self.health>=50{
            self.health-=50
            print("Running Fast")
            return self
        }
        return self
    }
    func sleep() ->Self{
        if self.health<=150{
            self.health+=50
        }
        else if self.health<200{
            self.health = 200
        }
        return self
    }
}

var cheetah1:Cheetah = Cheetah(cheetahName:"littleC")
cheetah1.run().run().run().run().display_health()
var lion1:Lion=Lion(lionName:"littleLion")
lion1.run().run().run().growl()
