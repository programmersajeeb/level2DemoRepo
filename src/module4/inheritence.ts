// class Parent {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep ${hours}`;
//   }
// }

// class Student extends Parent {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }

//   makeSleep(hours: number): string {
//     return `Arif ${this.name} will sleep ${hours}`;
//   }
// }

// const student = new Student("Arif", 29, "Bangladesh");
// // student.

// class Teacher extends Parent {
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   takeClasses(numberOfClass: number): string {
//     return `This ${this.name} is take ${numberOfClass} classes`;
//   }
// }
