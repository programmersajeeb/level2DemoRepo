/* type user = {
    name: string,
    age: number
}

type extendUser = user & {
    role: string
}

const userWithTypeAlias: extendUser = {
    name: 'alias type',
    age: 123,
    role: 'unknown'
} */

/* declar a function with type alias when function is object we can use type alias on Array and object also. we are use type alias on function it more sweetabel to see */

// type addNumbersType = (num1: number, num2: number) => number;
// const addNumbers: addNumbersType = (num1, num2) => {
//     return num1 + num2
// }
/* 
interface IAddTwoNumbers {
    (num1: number, num2: number): number
}
const addNumbersInterface: IAddTwoNumbers = (num1, num2) => num1 + num2;

interface IUser {
    name: string,
    age: number,
}

interface IExtendUser extends IUser {
    role: string,
}

const userWithTypeInterface: IExtendUser = {
    name: 'interface type',
    age: 098,
    role: 'unkhown'
} */

// alias type 
type user = {
    name: string,
    age: number
}

// extend alias type 
type extendUserAlias = user & {
    role: string
}

// interface type 
interface InterfaceUser {
    name: string,
    age: number
}

// extend interface 
interface extendInterfaceUser extends InterfaceUser {
    role: string
}

const myUser: extendInterfaceUser = {
    name: 'Arif',
    age: 30,
    role: 'developer'
}