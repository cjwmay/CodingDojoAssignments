//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

var list = [Int]()
for i in 1...255{
    list.append(i)
}
print (list)

var a = arc4random_uniform(265)
var b = arc4random_uniform(265)
var temp = Int(a)
list[Int(a)] = list[Int(b)]
list[Int(b)] = temp
var i = 0
while i < 100{
    var c = arc4random_uniform(UInt32(list.count)-1)
    var d = arc4random_uniform(UInt32(list.count)-1)
    var temp2 = list[Int(c)]
    list[Int(c)] = list[Int(d)]
    list[Int(d)] = temp2
    i+=1
}
print (list)

for x in 0...list.count-1{
    if list[x] == 42{
        print ("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index",x)
        list.remove(at:x)
        break
    }
}