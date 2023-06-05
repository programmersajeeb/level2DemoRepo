/* genericInterface type example */
/* 
interface GenericInterface<T> {
    name: string,
    husband: T,
};

const crush1: GenericInterface<boolean> = { name: 'as', husband: true };
const crush21: GenericInterface<string> = { name: 'asdf', husband: ';klj;l' };

interface HunsbandInterface {
    name: string,
    salary: number,
};

const crush3: GenericInterface<HunsbandInterface> = {
    name: 'bizli', husband: {
        name: 'arif',
        salary: 23,
    }
} */

interface CrushInterface<T, U = null> { name: string; hubby: T; wife?: U }

const maliha: CrushInterface<boolean, string> = {
    name: 'Maliha',
    hubby: true,
    wife: 'bizli'
}

// type hubbyType = {
//     name: string,
//     age: number,
//     isMaried: boolean,
//     wife: string
// }

interface hubbyType {
    name: string,
    age: number,
    isMaried: boolean,
    wife: number
}
const shawon: CrushInterface<hubbyType> = {
    name: 'Shumona Shawon',
    hubby: {
        name: 'Arif',
        age: 23,
        isMaried: true,
        wife: 9
    }
}

const taba: CrushInterface<string> = {
    name: 'Taba',
    hubby: "Arif"
}