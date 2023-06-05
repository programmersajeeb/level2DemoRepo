/* type GenericTupple<X, Y> = [X, Y];

const relation: GenericTupple<string, string> = ['as', 'df'];

const relationAndSalary: GenericTupple<object, string> = [{ name: 'as', salary: 1213324 }, 'string']

// type userSalary = {
//     name: string,
//     salary: number
// }

interface userSalary {
    name: string,
    salary: number
}
const relationAndSalary2: GenericTupple<userSalary, string> = [{ name: 'as', salary: 1213324 }, 'string']
type GenericArray<T> = Array<T>;

const rool: GenericArray<number> = [12, 13, 14]
const rool1: GenericArray<string> = ['1', 's', 'd']
const rol3: GenericArray<boolean> = [false, true]

type nameRoll = { name: string, roll: number }

const roolNameAndNumber: GenericArray<nameRoll> = [
    { name: 'a', roll: 23 },
    { name: 'b', roll: 22 }
] */

/* Generic type is a general type which have use all types of variable like string, boolean, number */
type GenericTupple<x, y> = [x, y];

const demoRemo: GenericTupple<string, string> = ['Arif', 'Bizli'];




type GenericArray<T> = Array<T>;
type NameRoll = { name: string, roll: number }

const usereNumberAndName: GenericArray<NameRoll> = [{
    name: 'Arif',
    roll: 23,
}, {
    name: 'Ashik',
    roll: 34
}]