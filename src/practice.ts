// const userInfo = [101, "Ema", "John", true,  , "2023"];
// const userInfo: [number, string, string, boolean, string] = [
//   101,
//   "Ema",
//   "John",
//   true,
//   "2023",
// ];
const tupple1: [number, string] = [101, "Ema"];
const tupple2: [string, boolean] = ["John", true];

// function findCommonElements(arr1: number[], arr2: number[]): number[] {
//   const commonElements: number[] = [];

//   for (const num of arr1) {
//     if (arr2.includes(num)) {
//       commonElements.push(num);
//     }
//   }

//   return commonElements;
// }
// const array1: number[] = [1, 2, 3, 5, 6];
// const array2: number[] = [2, 4, 6, 5];
// const commonArray: number[] = findCommonElements(array1, array2);
// console.log(commonArray);

// function comonElement(param1: number[], param2: number[]): number[] {
//   const commonNumber = param1.filter((number) => param2.includes(number));
//   return commonNumber;
// }
// const array1 = [1, 3, 2, 4, 5, 6];
// const array2 = [2, 9, 4, 6];

// const commonArray = comonElement(array1, array2);
// console.log(commonArray);

interface Product {
  name: string;
  price: number;
  quantity: number;
}

/* const products1: Product[] = [
  { name: "Product 1", price: 10.99, quantity: 5 },
  { name: "Product 2", price: 20.99, quantity: 3 },
  { name: "Product 3", price: 5.99, quantity: 8 },
];

function filterProducts<T>(
  array: T[],
  criterion: keyof T,
  value: T[keyof T]
): T[] {
  return array.filter((item) => item[criterion] === value);
}

// Example usage
const filteredProducts = filterProducts(products1, "price", 10.99);
console.log(filteredProducts); */

/* // a simple genericfunction 
const genericFunction1 = <T>(param: T): T[] => {
  return [param];
}; */

/* const genericCriterion = <T>(array: T, criterion: T): T[] => {
  return [array];
}; */

function logStringRepeatedly(str: string, num: number = 3): void {
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
}

// // Examples
// logStringRepeatedly("Hello", 5); // Logs "Hello" five times
// logStringRepeatedly("Hi"); // Logs "Hi" three times (default value)

// const repeatString = (string: string, number: number = 6) => {
//   for (let i = 0; i < number; i++) {
//     console.log(string);
//   }
// };

// repeatString("Bizli");

// function filterAdults(persons: Person[]): Person[] {
//   return persons.filter((person) => person.age >= 18);
// }

/* interface Person {
  name: string;
  age: number;
}

function filterAdults(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 18);
}

// Example usage
const persons: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
];

const adults: Person[] = filterAdults(persons);
console.log(adults); */

// function reverseArray<T>(...items: T[]): T[] {
//   return items.reverse();
// }

// const teacherArray = <T>(...teacher: T[]): T[] => {
//   return teacher.reverse();
// };

// // Example usage
// const teacher = teacherArray(
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "mezbah",
//   "jhankar"
// );
// console.log(teacher);

// class Person {
//   constructor(private name: string, private age: number) {}

//   public getDetails(): string {
//     return `This is developer: ${this.name}, he is : ${this.age} years old`;
//   }
// }

// const person = new Person("Sajeeb", 25);
// console.log(person.getDetails());

class Person {
  constructor(private name: string, private age: number) {}

  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  public getGrade(): string {
    return this.grade;
  }
}

const person = new Person("Sajeeb", 25);
console.log(person.getDetails());

const student = new Student("Sajeeb", 18, "A+");
console.log(student.getGrade());

// const genericf = <T>(param: <T>): <T> => {
//   return [demo]
// }

// Can you give an example of how to use generics in TypeScript?
// Example 1: Generic function
const genericFunction1 = <T>(param: T): T[] => {
  return [param];
};

/* এখানে জেনেরিক ফাংশন  একটা জেনেরিক এ্যারে যা যে কোন ধরনের ডাটা নিতে পারে স্ট্রিং, নাম্বার, বা বুলিয়ান  েএবং রিটার্ন করে সেই ধরনের ডাটার এ্যারে */
// genericFunction1<number>(numbers); // Output: 1 2 3 4 5
// genericFunction1<string>(strings); // Output: apple banana cherry

// Example 2: Generic class
class Box<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}

const numberBox = new Box<number>();
numberBox.addItem(1);
numberBox.addItem(2);
numberBox.addItem(3);

console.log(numberBox.getItem(1)); // Output: 2

const stringBox = new Box<string>();
stringBox.addItem("apple");
stringBox.addItem("banana");
stringBox.addItem("cherry");

console.log(stringBox.getItem(0)); // Output: apple
