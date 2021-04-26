// Точка
class Dot {
    constructor(center) {
        this._center = center;
    }
    get center() {
        return this._center;
    }
}
// Линия
class Line extends Dot {
    constructor(dotA, dotB) {
        super();
        this._dotA = dotA;
        this._dotB = dotB;
        // Нахождение центра
        this._center = [(this._dotA[0] + this._dotB[1]) / 2, (this._dotB[0] + this._dotA[1]) / 2];
        this._length = Math.sqrt(Math.pow((this._dotB[1] - this._dotA[0]), 2) + Math.pow((this._dotB[0] - this._dotA[1]), 2));
    }
    get center() {
        return this._center;
    }
    get coordinates() {
        return [this._dotA, this._dotB];
    }
    get length() {
        return this._length;
    }
}
// Прямоугольник
class Rectangle {
    constructor(x1dot, x2dot, y1dot, y2dot) {
        this._x1dot = x1dot;
        this._x2dot = x2dot;
        this._y1dot = y1dot;
        this._y2dot = y2dot;
        this._center = [(this._x1dot + (this._y1dot) / 2), (this._x2dot + (this._y2dot) / 2)];
    }
    get center() {
        return this._center;
    }
    get peaks() {
        return [this._x1dot, this._x2dot, this._y1dot, this._y2dot];
    }
}
// Круг
class Circle {
    constructor(center, radius) {
        this._radius = radius;
        this._center = center;
        this._diameter = this._radius * 2;
        this._length = this.radius * 2 * 3, 14;
        this._square = this._radius * this._radius * 3, 14;
    }

    get radius() {
        return this._radius;
    }
    get center() {
        return this._center;
    }
    get diameter() {
        return this._diameter;
    }
    get length() {
        return this._length;
    }
    get square() {
        return this._square;
    }
}
class Ellipse {
    constructor(center, radiusA, radiusB) {
        this._center = center;
        this._radiusA = radiusA;
        this._radiusB = radiusB;
    }
    get peaks() {
        return [
            [this._center[0] + this._radiusA, this._center[1]],
            [this._center[0] - this._radiusA, this._center[1]],
            [this._center[0], this._center[1] - this._radiusB],
            [this._center[0], this._center[1] + this._radiusB],
        ]
    }
    get diameters() {
        return [Math.pow(this._radiusA, 2), Math.pow(this._radiusB, 2)]
    }
    get radiuses() {
        return [this._radiusA, this._radiusB];
    }
    get center() {
        return this._center;
    }
}

function createDot() {
    let coords = prompt("Введите координаты точки (через запятую):", '').split(',');;
    let ctx = mycanvas.getContext("2d");
    let dot = new Dot(coords);
    ctx.beginPath();
    ctx.arc(dot.center[0], dot.center[1], 1, 0, 2 * Math.PI);
    ctx.fill();
}

function createLine() {
    let coords = prompt("Введите координаты точки начала и конца линии (через запятую):", '').split(',');
    let ctx = mycanvas.getContext("2d");
    let line = new Line([coords[0], coords[1]], [coords[2], coords[3]]);
    ctx.beginPath();
    ctx.moveTo(line.coordinates[0][0], line.coordinates[0][1]);
    ctx.lineTo(line.coordinates[1][0], line.coordinates[1][1]);
    ctx.closePath();
    ctx.stroke();
}

function createRectangle() {
    let coords = prompt("Введите координаты вершин прямоугольника (через запятую):", '').split(',');
    let ctx = mycanvas.getContext("2d");
    let rectangle = new Rectangle(coords[0], coords[1], coords[2], coords[3]);
    ctx.beginPath();
    ctx.fillRect(rectangle.peaks[0], rectangle.peaks[1], 20, 50);
    ctx.fill();
}

function createCircle() {
    let coords = prompt("Введите координаты центра и радиус (через запятую):", '').split(',');
    let ctx = mycanvas.getContext("2d");
    let circle = new Circle([coords[0], coords[1]], coords[2])
    ctx.beginPath();
    ctx.arc(circle.center[0], circle.center[1], circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function createEllipse() {
    let coords = prompt("Введите координаты центра и радиусов (через запятую):", '').split(',');
    let ctx = mycanvas.getContext("2d");
    let ellipse = new Ellipse([coords[0], coords[1]], coords[2], coords[3]);
    ctx.beginPath();
    ctx.ellipse(ellipse.center[0], ellipse.center[1], ellipse.radiuses[0], ellipse.radiuses[1], 0, 0, Math.PI * 2);
    ctx.fill();
}
let mycanvas = document.getElementById("mycanvas");

mycanvas.width = 1000;
mycanvas.height = 1000