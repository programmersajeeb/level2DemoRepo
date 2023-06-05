/* let emni: any;

emni = 123231;
emni = 'khela shuru';
emni = true;

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The return value is: ${value}`
    }
    if (typeof param === 'number') {
        const value = param * 1000
        return value
    }
}

const returnNumber = kgToGram(1000) as number;
const returnString = kgToGram('1000') as string;

let khali: any;

khali = `it can be string, number or boolean `;
khali = 1231123;
khali = true

function inchToMeeter(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 100;
        return `The string parameeter result is: ${value}`
    }
    if (typeof param === 'number') {
        const vlaue = param * 100;
        return vlaue;
    }
}

const amar = inchToMeeter('hajar hajar dollar') as string;
const tomar = inchToMeeter(09238409) as number;
 */
let kisu: any;

kisu = 222;
kisu = " khela kebol shuru";
(kisu as number).toFixed
// (kisu as string).at;

function kgToGram(params: string | number): string | number | undefined {
    if (typeof params === 'string') {
        const value = parseFloat(params) * 1000;
        return `The result is ${value} a string`
    }
    if (typeof params === 'number') {
        const vlaue = params * 1000
        return vlaue
    }
}

const inchToMeeter = kgToGram(1000) as number;
const stringMethod = kgToGram('hamla dol') as string;