#for x in range(100,1000):
    #for a in range(2,x/2):
        #if x==a*a:
            #print x,"Bar";


def isPrime():
   primecount = 0
   for i in range(100, 10000):
       count = 0
       count2 = 0
       for j in range(2, i):
           if i%j == 0:
               count += 1
               if i/j == j:
                   count2 += 1
       if count != 0 and count2 == 0:
           print "Bar"
       elif count2 != 0:
           print "FooBar"
       else:
           print "Foo",
           primecount += 1
   print primecount
