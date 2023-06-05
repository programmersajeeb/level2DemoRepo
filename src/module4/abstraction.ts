// // interface
// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "car",
//   model: "RRR",
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  startEngine(): void {
    console.log(`Gari cole na`);
  }
  stopEngine(): void {
    console.log(`gari hapay gese`);
  }
  move(): void {
    console.log(`aibar gari coltese`);
  }
  test() {
    console.log(`hello garigula`);
  }
  test1() {
    console.log(`hello garigula`);
  }
  test2() {
    console.log(`hello garigula`);
  }
  test3() {
    console.log(`hello garigula`);
  }
}
