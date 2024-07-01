console.log('\r\n //================== CHALLENGE AREA =================================== \r\n')


const todos = ['Daily Coding', ' Start Praying', ' Pay Bills', ' Organization Desk', ' Return Target', ' Return Amazon']


// Delete the 3rd item
// Add a new item

todos.splice(2,1)// delete the third item

todos.push(' My New ToDos') // add new item at the end

todos.shift() // remove first item the list

console.log(`You have ${todos.length} todos`)
console.log(todos)