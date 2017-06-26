import turtle
# the distance we want the pointer to travel each time
DIST = 100
for x in range(0,5):
    print "x", x
    for y in range(1,4):
        print "y", y
        # turn the pointer 90 degrees to the right
        turtle.right(90)
        # advance according to set distance
        turtle.forward(DIST)
    # add to set distance
    DIST += 20

star = turtle.Turtle()

painter = turtle.Turtle()

painter.pencolor("blue")

for i in range(50):
    painter.forward(50)
    painter.left(123) # Let's go counterclockwise this time

painter.pencolor("red")
for i in range(50):
    painter.forward(100)
    painter.left(123)

turtle.done()

for i in range(50):
    star.forward(50)
    star.right(144)

turtle.done()
