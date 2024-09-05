//-----------------------------------------------------------------------------------------
console.log('\r\n The For Loop')
//-----------------------------------------------------------------------------------------

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
console.log(todos)


todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()


console.log(`You have ${todos.length} todos!`)


// Looping Over Arrays
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

//----------------------------------------------------------------
console.log('\r\n') // blank space
//----------------------------------------------------------------

console.log('\r\n The For Loop')
// 1. order cat food
// 2. clear kitchen
// ...


for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}
