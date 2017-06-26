def draw_stars(x):
    for i in range(0,len(x)):
        if type(x[i]) == int:
            x[i]="*"*x[i]
            print x[i];
        else:
            x[i]=x[i][0]*len(x[i])
            print (x[i].lower());
    return;
draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
