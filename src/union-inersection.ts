type NoobDeveloper = {
    name: string
};

/* type JuniorDeveloper = {
    name: string,
    expetise: string,
    experience: number,
}; */

type JuniorDeveloper = NoobDeveloper & {
    expetise: string,
    experience: number,
};

// union type example
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Moznu mia',
    expetise: 'javaScript',
    experience: 6,
}