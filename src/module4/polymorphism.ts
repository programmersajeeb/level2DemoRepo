/* class Person {
  takeNap() {
    console.log(`I'm avarage person sleeping 8 hour`);
  }
}
class Student extends Person {
  takeNap(): void {
    console.log(`I'm a student slepping 10 hour`);
  }
}
class Developer extends Person {
  takeNap(): void {
    console.log(`I'm a developer probelm & problem hear`);
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const instance1 = new Person();
const instance2 = new Student();
const instance3 = new Developer();
// getNap(instance1);
// getNap(instance2);
// getNap(instance3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
 */
