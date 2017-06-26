def function(li,c):
    newLi=[]
    for x in range(0,len(li)):
        if li[x].find(c)!=-1:
            newLi.append(li[x])
        else:
            continue;
    print newLi
    return;

function(['hello','world','my','name','is','Anna'],"o")
