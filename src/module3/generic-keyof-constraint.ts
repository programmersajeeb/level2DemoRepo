type myType = {
    name: string,
    age: number,
    home: string,
}

type newUnion = 'name' | "age" | 'home';
type newKeyofType = keyof myType;

// const a : newUnion = 'age';
// const b: newKeyofType = 'home'

function getProperty<x, y extends keyof x>(obj: x, key: y) {
    obj[key]
}

const property = getProperty({ name: 'ab', age: 23 }, 'age')
