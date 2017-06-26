for a in range(100,100000):
    x=0
    for b in range (2,a-1):
        if a%b==0:
            x+=1
            y=0
            if a==b*b:
                print "perfectS",a
                y+=1
    if x!=0 and y==0:
        print "neither",a
    if x ==0:
        print "prime", a
