// we can't use default value on the first parameter

const adding = (num1: number = 10
    /* it's a wrong way to declar a default value on first parameter we should declear it on second parameter */,
    num2: number): number => num1 + num2
adding(21, 23)

// this is the write way to use dafault parameter
function jog(n1: number, n2: number = 10): number {
    return n1 + n2
}
jog(2)

// spread operator
const myFriends: string[] = ['arif', 'ashik', 'kazol'];
const newFriends: string[] = ['demo', 'remo', 'jemo']

myFriends.push(...newFriends)
// console.log(myFriends);

const greetings = (...friends: string[]) => {
    return friends.forEach(friend => console.log(`hi ${friend}`))
}

greetings('asd', 'aba', 'ded', 'ifk', 'lkl')