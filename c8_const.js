let isRaining = true

isRaining = false

console.log(isRaining)


// const based variables is that you can't reassign a constant after it has been created
// if create a variables and you know your not going to reassign it's value --> it best to use constant over let base variable
const isRainingTwo = true

// isRainingTwo = false   --> error -- assignment to constant variable

console.log(isRainingTwo)

const person = {
    age: 27
}
console.log(person) // 27

// to manipulate that object, which means still can access person.age
person.age = 30
console.log(person) // 30