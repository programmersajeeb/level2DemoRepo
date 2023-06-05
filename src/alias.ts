/* type CrushType = {
    name: string,
    age?: number,
    address: string,
    profession: string
}

const crush: CrushType = {
    name: 'Moina Pakhi',
    age: 22,
    address: 'Uganda',
    profession: 'Web Developer'
};

const crush2: CrushType = {
    name: 'Jan paki',
    address: 'kanada',
    profession: 'next level developer'
};
type BooleanType = boolean;


const isCrushMarried: BooleanType = true;

type StrignType = string;
const crushString: StrignType = 'Jan pakhi koi t4444umi';

type NumberType = number;
const crushNumber: NumberType = 1;

// function er type alias
type FunctionAlia = (x: number, y: number) => number;
const calculate = (
    number1: number,
    number2: number,
    operation: FunctionAlia,
): number => {
    return operation(number1, number2)
}

calculate(12, 134, (x, y) => x + y)
calculate(11, 23, (x, y) => x - y) */

type AmarType = {
    name: string,
    age: number,
    address: string,
    isMarried: boolean,
    wife?: string,
}

const ami: AmarType = {
    name: 'Arif',
    age: 29,
    address: 'Rangpur',
    isMarried: true,
    wife: 'Bizli',
}

const tumi: AmarType = {
    name: 'Tu;mi',
    age: 23,
    address: 'India',
    isMarried: false
}

/* type AddType = (x: number, y: number) => number


const addByAlias = (num1: number, num2: number, operation: AddType) => {
    return operation(num1, num2)
}

const value = addByAlias(12, 14, (x, y) => x + y)
console.log(value); */

/* type operation1 = (x: number, y: number) => number;

const AddiType = (number1: number, number2: number, operation: operation1) => {
    return operation(number1, number2)
}

const value = AddiType(234, 6, (x, y) => x + y);
console.log(value); */

type operat = (x: number, y: number) => number;

const AbarAddType = (num1: number, num2: number, operational: operat) => {
    return operational(num1, num2)
}

const valueabla = AbarAddType(16, 8, (a, b) => a - b);
console.log(valueabla);