class Underscore(object):
    def map(self, func, list):
        for i in range (len(list)):
            #print func(list[i])
            list[i]=func(list[i])
        print list
    def reduce(self,func, list, start):
        sum = 0
        for i in range(start, len(list)):
            sum +=list[i]
        print sum
    def find(self,func, list):
        for i in list:
            if func(i)==True:
                print i
                return
    def filter(self,func,list):
        for i in list:
            if func(i)==False:
                list.remove(i)
        print list
        return list
    def reject(self,func,list):
        for i in list:
            if func(i)==True:
                list.remove(i)
        print list


_ = Underscore()
_.filter(lambda num:num%2==0,[1, 2, 3, 4, 5, 6])
_.map(lambda num:num * 3,[1, 2, 3])
_.reduce(lambda x,y:x+y, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
_.find(lambda num:num%2==0,[1, 2, 3, 4, 5, 6])
_.reject(lambda num:num%2==0,[1, 2, 3, 4, 5, 6])


#_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })
#_.map([1, 2, 3], function(num){ return num * 3; })
#=> [3, 6, 9]
# _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0)
#=> 6
#_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })
#_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
#=> [1, 3, 5]
