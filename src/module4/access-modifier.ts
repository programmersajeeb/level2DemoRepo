// // class BangAccount {
// //   id: number;
// //   name: string;
// //   balance: number;

// //   constructor(id: number, name: string, balance: number) {
// //     this.id = id;
// //     this.name = name;
// //     this.balance = balance;
// //   }
// // }

// // const myAccount = new BangAccount(23, "arif", 231);
// // console.log(myAccount);

// class BangAccount {
//   public readonly id: number;
//   public name: string;
//   private _balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }

//   getBalance() {
//     console.log(`My current balance is ${this._balance}`);
//   }

//   addBalance(amount: number) {
//     this._balance = this._balance + amount;
//   }
// }

// const myAccount = new BangAccount(23, "Bizzli", 2323);
// console.log("Ai holo aamar account", myAccount);
