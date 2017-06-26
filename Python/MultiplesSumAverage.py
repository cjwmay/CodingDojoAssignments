sum=0
for x in range(1,1001):
    sum=sum+x

print sum

#multiples of 5
sum=0
for x in range(5,1000001):
    if x%5==0:
        sum=sum+x
print sum
#sum list
a = [1, 2, 5, 10, 255, 3]
sum=0
for x in range(0,len(a)):
    sum=sum+a[x]
print sum
#average list
a = [1, 2, 5, 10, 255, 3]
sum=0
average=0
for x in range(0,len(a)):
    sum=sum+a[x]
    average=sum/len(a)
print average
