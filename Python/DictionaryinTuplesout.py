my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

name=[]
phone=[]
for a in my_dict:
    name.append(a)
    phone.append(my_dict[a]);
#print name
#print phone
tu=zip(name,phone)
print tu
