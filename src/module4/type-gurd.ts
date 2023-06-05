// // keyof gurad type
// type AlphaNeumeric = string | number;

// function add(param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric {
//   if (param1 === "number" && param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// add("2", "2");
// add(2, 3);

// // in gurd type

// type Normaluser = { name: string };
// type adminUser = { name: string; role: "admin" };

// function getUser(user: Normaluser | adminUser) {
//   if ("role" in user) {
//     return `I'm an admin role is ${user.role}`;
//   } else {
//     return `I'm a normal user`;
//   }
// }

// const Normaluser1: Normaluser = { name: "mr.normal" };
// const adminUser2: adminUser = { name: "mr.admin", role: "admin" };

// // console.log(getUser(Normaluser1));
// // console.log(getUser(adminUser2));

// class Animal {
//   name: string;
//   species: string;
//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     console.log(`I'm making sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log(`I'm barking Ghew Ghew`);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeaw() {
//     console.log(`I'm mewaing`);
//   }
// }

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getSound(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }
// const animal1 = new Dog("tipu sultan", "dog"); /*  Dog instance */
// const animal2 = new Cat("Mihin", "cat"); /* Cat instance */

// getSound(animal2);
