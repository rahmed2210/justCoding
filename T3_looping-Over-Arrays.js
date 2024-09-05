//-----------------------------------------------------------------------------------------
console.log('\r\n Looping Over Arrays')
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

