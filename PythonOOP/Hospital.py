class Patient(object):
    def __init__(self, pid, pname, pallergies):
        super(Patient, self).__init__()
        self.pid = pid
        self.pname = pname
        self.pallergies = pallergies
        self.bednum = "none"

p1 = Patient(8,"Jingwen","allergy1")

class Hospital(object):
    def __init__(self, name):
        self.name = name
        self.patientlist = []
        self.capacity=100
    def addP(self,newP,bedno):
        vars(newP)['bednum']=bedno
        if len(self.patientlist)<self.capacity:
            self.patientlist.append(vars(newP))
            print "welcome to our hospital!"
        else:
            print "sorry we are full"
        print self.patientlist
        return self
    def dischargeP(self,disP):
        self.patientlist.remove(vars(disP))
        vars(disP)['bednum']="none"
        print self.patientlist
        print vars(disP)
        return self

h1=Hospital("YHospital")
h1.addP(p1,10).dischargeP(p1)
