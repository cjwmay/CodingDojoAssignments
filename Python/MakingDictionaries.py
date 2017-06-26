name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]
if len(name)>=len(favorite_animal):
    li=zip(name,favorite_animal)
#print li
    newDict=dict(li)
    print newDict
elif len(name)<len(favorite_animal):
    li=zip(favorite_animal,name)
    newDict=dict(li)
    print newDict
