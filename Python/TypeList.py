def function(li):
    import types
    sum=0
    i=0
    s=0
    string="string:"
    for x in range(0,len(li)):
        if type(li[x]) is types.IntType or type(li[x]) is types.FloatType:
            sum=sum+li[x];
            i=1;
        elif type(li[x]) is types.StringType:
            string+=li[x];
            s=1;
    if i==1 and s==1:
        print "The array you entered is of mixed type"
        print string
        print "sum:",sum;
    elif i==1:
        print "The array you entered is of integer type"
        print "sum", sum;
    elif s==1:
        print "The array you entered is of string type"
        print string;
    return;



function(['magical','unicorns'])
