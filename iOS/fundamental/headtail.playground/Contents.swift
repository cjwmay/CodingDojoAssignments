//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

//func sayHello(name: String) {
//    print("Hello, \(name), how are you doing today?")
//}
//sayHello(name: "Andrew")
//
//func printDescription(width w: Int, height h: Int) {
//    print("My width is \(w) and my height is \(h)")
//}
//printDescription(width: 10, height: 20)
//
//var myInt = 1
//func changeMyInt(someInt: inout Int) {         // must specify "inout"
//    someInt = someInt + 1
//    print(someInt)
//}
//changeMyInt(someInt: &myInt)                            // must pass in the variable with "&" symbol
//print(myInt)

//func sayHello(name: String = "buddy") -> String {
//    return "Hey \(name)"
//}
//var greeting: String?
//greeting = sayHello()
//print(greeting)
//
//func calculateAreaOfRectangleWithWidth(w: Int, andHeight h: Int) -> Int {
//    return w * h
//}
//var area = calculateAreaOfRectangleWithWidth(w: 10, andHeight: 3)
//print(area)
//
//func lookForSomethingIn(dictionary: [String: Int], forKey key: String) -> Int? {
//    if let value = dictionary[key] {
//        return value
//    } else {
//        return nil
//    }
//}
//var jerseyNumbers = [
//    "Kobe": 8,
//    "Lebron": 23,
//    "Rondo": 9
//]
//var jerseyNumber = lookForSomethingIn(dictionary: jerseyNumbers, forKey: "Kobe")
//if let num = jerseyNumber {
//    print(num)
//}
func tossCoin()->String?{
    let random = arc4random_uniform(2)
    if random==1{
        print ("heads")
        return "heads"
    }
    print ("Tails")
    return "Tails"
}

func tossMultipleCoins(times:Int) -> Double?{
    var i = 0
    var counthead:Double=0
    var counttail:Double=0
    while i<times {
        var result=tossCoin()
        if result=="heads"{
            counthead+=1
        }
        else{
            counttail+=1
        }
        i=i+1;
    }
    print (counttail)
    print (counthead)
    let ratio = counthead / counttail
    print(ratio)
    return ratio
}
var Ratio=tossMultipleCoins(times:10)
if let num = Ratio{
    print (num)
}
