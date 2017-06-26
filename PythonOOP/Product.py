class Product(object):
    def __init__(self, price, item_name, weight, brand, cost):
        self.price=price
        self.item_name=item_name
        self.weight=weight
        self.brand=brand
        self.cost=cost
        self.status="for sale"
    def Sell(self):
        self.status="sold"
        return self
    def Addtax(self,tax):
        self.price= self.price *tax
        return self
    def Return(self,returnReason):
        if returnReason=="defective":
            self.status="defective"
            self.price="0"
        elif returnReason=="like_new":
            self.status="for sale"
        elif returnReason=="opened":
            self.status="used"
            self.price*=0.8
        return self
    def ShowAll(self):
        print self.price, self.item_name, self.weight, self.brand, self.cost, self.status

product1=Product(12,"Milk","1kg","WaHaha", 6,)
product1.Sell().Addtax(1.2).Return("defective").ShowAll()
