// create array with five todo
// you have x todo
// print the first and second to items  --> todo:

const todoOne = ['Daily Coding', 'Start Praying', 'Pay Bills', 'Organization Desk', 'Return Target', 'Return Amazon']


console.log(`You have ${todoOne.length} todos`)
console.log(`Todo: ${todoOne[0]}`)  // return first item
console.log(`Todo: ${todoOne[todoOne.length - 2]}`) // return second to last item



//================== CHALLENGE AREA ===================================
console.log('\r\n <==== CHALLENGE AREA ====> \r\n')

console.log('\r\n\----------------------------------------------------')// Blank Space
const todos = ['Daily Coding', ' Start Praying', ' Pay Bills', ' Organization Desk', ' Return Target', ' Return Amazon']
console.log(todos)
console.log(`You have ${todos.length} todos`)
console.log(todos)

console.log('\r\n\----------------------------------------------------')// Blank Space
todos.splice(2,1)// delete the third item
console.log('SPLICE --> ' + todos)

console.log('\r\n\----------------------------------------------------')// Blank Space
console.log(todos)
todos.push(' My New ToDos') // add new item at the end
console.log('PUSH --> ' + todos)

console.log('\r\n\----------------------------------------------------')// Blank Space
console.log('SHIFT --> ' + todos.shift())// remove first item the list
console.log(todos)

console.log('\r\n\----------------------------------------------------')// Blank Space
console.log(`You have ${todos.length} todos`)
// 1. The first item
// 2. The Second item
todos.forEach(function (todos, index) {
    const num = index + 1
    console.log(`${num}. ${todos}`)
})


/*    -- For Loop --> trying to count in a different order or don't have array
console.log('\r\n\---------------------------------------------------- For Loop')// Blank Space
// for Loop ++
for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}

console.log('\r\n\----------------------------------------------------')// Blank Space
// for Loop Reverse
for (let count = todos.length - 1; count > 0; count--) {
    console.log(todos[count])
}
*/