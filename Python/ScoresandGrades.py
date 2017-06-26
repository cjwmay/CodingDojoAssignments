import random
def function():
    print "Scores and Grades"
    for x in range (0,10):
        random_num = random.randint(60,100)
        #print random_num
        if random_num>=90:
            print "Score:",random_num,"; Your grade is A";
        elif random_num<90 and random_num>=80:
            print "Score:",random_num,"; Your grade is B";
        elif random_num<80 and random_num>=70:
            print "Score:",random_num,"; Your grade is C";
        else:
            print "Score:",random_num,"; Your grade is D";
    return;
function()
