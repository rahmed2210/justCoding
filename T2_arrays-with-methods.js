const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
console.log(todos)

//-----------------------------------------------------------------------------------------
// Manipulating Arrays with Methods
console.log('\r\n  Manipulating Arrays with Methods')
//-----------------------------------------------------------------------------------------

// Delete the 3rd item
todos.splice(2, 1)

// add a new item onto the end
todos.push('Buy coffee')

// remove the first item from the list
todos.shift()



console.log(`You have ${todos.length} todos!`)
console.log(todos)