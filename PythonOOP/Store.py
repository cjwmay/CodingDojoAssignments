class Store(object):
    def __init__(self, sLocation, sOwner):
        self.sLocation = sLocation
        self.sOwner = sOwner
        self.products=[]
    def add_product(self, newPro):
        self.products.append(newPro)
        return self
    def remove_product(self, oldPro):
        self.products.remove(oldPro)
        return self
    def inventory(self):
        print self.products
        return self
sto=Store("L.A","Jingwen")
sto.add_product("gum").add_product("banana").add_product("apple").remove_product("gum").inventory()
