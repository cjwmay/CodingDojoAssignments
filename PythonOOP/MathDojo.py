class MathDojo1(object):
    def __init__(self,value):
        self.value=value
    def Add(self,*args):
        #print map(str,args)
        for a in map(str,args):
            self.value+=int(a)
        #print self.value
        return self
    def Subtract(self,*args):
        for a in map(str,args):
            self.value-=int(a)
        return self
    def Result(self):
        print self.value
        return self
md=MathDojo1(2)
md.Add(2).Add(2,5).Subtract(3,2).Result()

class MathDojo1(object):
    def __init__(self,value):
        self.value=value
    def Add(self,*args):
        #print map(str,args)
        for a in args:
            self.value+=int(a)
        #print self.value
        return self
    def Subtract(self,*args):
        for a in args:
            self.value-=int(a)
        return self
    def Result(self):
        print self.value
        return self
md=MathDojo1(2)
md.Add(2).Add(2,5).Subtract(3,2).Result()

class MathDojo2(object):
    def __init__(self,value):
        self.value=value
    def Add(self,*args):
        #print args
        for a in args:
            if isinstance(a,int) or isinstance(a,float):
                #print a
                self.value+=a
            else:
                self.value+=sum(a)
        return self
    def Subtract(self,*args):
        for a in args:
            if isinstance(a,int) or isinstance(a,float):
                self.value-=a
            else:
                self.value-=sum(a)
        return self
    def Result(self):
        print self.value
        return self
md2=MathDojo2(2)
md2.Add([1],3,4).Add([3, 5, 7, 8], [2, 4.3, 1.25]).Subtract(2, [2,3], [1.1, 2.3]).Result()

class MathDojo3(object):
    def __init__(self,value):
        self.value=value
    def Add(self,*args):
        #print args
        for a in args:
            if isinstance(a,int) or isinstance(a,float):
                #print a
                self.value+=a
            else:
                self.value+=sum(a)
        #print self.value
        return self
    def Subtract(self,*args):
        for a in args:
            if isinstance(a,int) or isinstance(a,float):
                self.value-=a
            else:
                self.value-=sum(a)
        return self
    def Result(self):
        print self.value
        return self
md3=MathDojo3(2)
md3.Add((1),3,4).Add((3, 5, 7, 8), [2, 4.3, 1.25]).Subtract(2, [2,3], [1.1, 2.3]).Result()
