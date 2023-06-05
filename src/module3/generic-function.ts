// Arrow function with ts 
const createArray = (param: string): string[] => {
    return [param]
}
// জেনেরিক ফাংশন 
const genericArrayFunction = <T>(param: T): T[] => {
    return [param]
}

const value1 = genericArrayFunction<number>(23)
const value = genericArrayFunction<string>('Bangladesh');
const value2 = genericArrayFunction<boolean>(false)

// type Namee = { name: string }
interface Namees { name: string }
const value3 = genericArrayFunction<Namees>({ name: 'Arif' })
console.log(value1);

const tuppleGeneric = <x, y>(param1: x, param2: y): [x, y] => {
    return [param1, param2]
}

const value4 = tuppleGeneric<string, string>('Bangaldesh', 'I love you shona');

type tuppleObject = { name: string }
const value5 = tuppleGeneric<number, Array<tuppleObject>>(23, [{ name: 'Arif' }])
const value6 = tuppleGeneric<boolean, tuppleObject>(false, { name: 'Bizli' });

// type infoType = {
//     name: string,
//     age: number,
//     salary: number,
// }
// const myInfo:infoType = {
//     name: 'arif',
//     age: 23,
//     salary: 23978409,
// }
// const crush = 'AB';
// const spreadOperator = {...myInfo, crush};
//স্প্রেডঅপারেটর  এর কাজ জেনেরিক ফাংশন দিয়ে করার নিয়ম

const genericSpreadFunction = <T>(myInfo: T) => {
    const crush = "AB";
    const newData = { ...myInfo, crush };
    return newData;
}

type myInfoType = {
    name: string,
    age: number,
    salary: number,
}
const myInfo: myInfoType = {
    name: 'Arif',
    age: 23,
    salary: 8768687,
}
const result8 = genericSpreadFunction(myInfo);

function genericNormalFunction<x, y>(param3: x, param4: y) {
    return [param3, param4]
}
