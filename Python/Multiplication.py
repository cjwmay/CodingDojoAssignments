li=[]
string=""
ta=[]
for x in range(1,13):
    li.append(x)
    #print li[x-1];
    string +=str(li[x-1])
    string +=" ";
print "x",string

for y in range(1,13):
    li=[]
    string=""
    for x in range(1,13):
        li.append(x)
        #print li[x-1];
        string +=str(li[x-1]*y)
        string +=" ";
    print y,string
