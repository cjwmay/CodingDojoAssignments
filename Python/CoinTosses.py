import random
def function():
    x=0
    h=0
    t=0
    while x<5000:
        random_num = random.random()
        random_num_rounded = round(random_num)
        if (random_num_rounded==1):
            x=x+1
            h=h+1
            print "Attempt #",x,": Throwing a coin... It's a head! ... Got",h,"head(s) so far and",t, "tail(s) so far";
        else:
            x=x+1
            t=t+1
            print "Attempt #",x,": Throwing a coin... It's a head! ... Got",h,"head(s) so far and",t, "tail(s) so far";
    return;

function()
