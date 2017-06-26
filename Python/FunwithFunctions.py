def OddEven():
    for a in range(1,2001):
        if a%2!=0:
            print "Number is",a,".This is an odd number";
        else:
            print "Number is",a,".This is an even number";
    return;

#OddEven()

def multiply(a,num):
    for x in range(0,len(a)):
        a[x]*=num
    return a;
a = [2,4,10,16]
b = multiply(a,5)
#print b

def layered_multiples(a,num):
    newArr=[]
    for x in range(0,len(a)):
        val_newArr=[]
        a[x]*=num
        for y in range (0,a[x]):
            val_newArr.append(1);
        newArr.append(val_newArr);
    return newArr;
a = [2,4,10,16]
b = layered_multiples(a,3)
print b
