// array with generic 
const generalFunction = (param: string): string[] => {
    return [param]
}

const r1esult = generalFunction('Bangladesh')
// console.log(r1esult);

const genericFunction = <T>(param: T): T[] => {
    return [param]
}

const r1esult1 = genericFunction<string>('Bangladesh')
const r1esult2 = genericFunction<boolean>(true)

type Name = { name: string }
const r1esult3 = genericFunction<Name>({ name: 'Arif' })
console.log(r1esult3);