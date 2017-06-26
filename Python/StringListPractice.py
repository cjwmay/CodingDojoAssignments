str = "It's thanksgiving day. It's my birthday,too!"
str2="day"
print str.find(str2)
print str.replace("day","month")

#MinMax
x = [2,54,-2,7,12,98]
print max(x)
print min(x)
#FirstLast
x = ["hello",2,54,-2,7,12,98,"world"]
x2=["first","last"]
x2[0]= x[0]
x2[1]=x[-1]
print x2
#NewList
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
a=x[:len(x)/2]
b=x[len(x)/2:]
print a,b
b.insert(0,a)
print b
