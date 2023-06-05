/* function add(num1: number, num2: number): number {
    return num1 + num2
}

const addArrow = (num1: number, num2: number): number => num1 + num2

// callback function and typescript 
const num = [2, 3, 4]
const newArr = num.map((ele: number) => ele * ele)

const person: {
    neme: string,
    balance: number,
    addBalance(money: number): string
} = {
    neme: 'Arif',
    balance: 5,
    addBalance(money: number) {
        return `my total balance is ${this.balance + money}`
    }
} */

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, nbum2: number): number => {
  return num1 + nbum2;
};

const people: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "ab",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
