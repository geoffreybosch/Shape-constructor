function shape(n, s) {
    console.log("Running the shape function.")
    this.name = n;
    this.sides = s;
    console.log(n + " has finshed compiling \n")
}


function rectangle(h, w, n, s) {
    console.log("Running the rectangle function.")
    this.height = h;
    this.width = w;
    //Here I am calling the shape function, the name and sides are always the same, so I have typed the values here, instead of pulling them from line 35
    shape.call(this, n, s)
}


function square(h, w, n, s) {
    console.log("Running the square function.");
    if (h != w) {
        console.log("This isn't a square. We've changed the width to match the height.")
        w = h
    }
    rectangle.call(this, h, w, n, s);
}


rectangle.prototype = Object.create(shape.prototype);

rectangle.prototype.area = function () {
    var area = this.height * this.width;
    console.log("The area of this shape is " + area + " inches");
}


rectangle.prototype.perimeter = function () {
    var peri = (this.height * 2) + (this.width * 2);
    console.log("The perimeter of this shape is " + peri + " inches \n");
}

square.prototype = Object.create(rectangle.prototype);

var rect = new rectangle(10, 4, "Rectangle", 4)
var sq = new square(5, 4, "Square", 4);

console.log(rect);
rect.area();
rect.perimeter();

console.log(sq);
sq.area();
sq.perimeter();