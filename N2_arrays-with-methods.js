const notes = ['Note 1', 'Note 2', 'Note 3', 'Note4']

//-----------------------------------------------------------------------------------------
// Manipulating Arrays with Methods
console.log('\r\n Manipulating Arrays with Methods')
//-----------------------------------------------------------------------------------------



//   /* notes.pop()  // remove something from the end */
// console.log('Remove from the end: ' + notes.pop())

// /* notes.push('My new Note') // Push adds something on to the end */
// console.log('adding at the end: ' + notes.push('My new Note')) 


//  /* shift --> method removes the very first item from your array */
// console.log('Remove first item: ' + notes.shift())

//    /* unshift --> method add at the very first beginning of array */
// console.log(notes.unshift('My first Note'))


//  /* Splice -- allow us to add elements to the middle of array or remove elements from anywhere */
//   /* -->take two argument
//        --> 1st argument to splice is where you're trying to take the action
//         --> 2nd argument we provide is the number of things we're interested in removing */

// console.log('Splice removing item: ' + notes.splice(1, 1))
// console.log('Splice removing and adding new item: ' + notes.splice(1, 0, 'This is the new second item'))
// console.log('Splice removing and adding new item: ' + notes.splice(1, 1, 'This is the new 2 second item'))

// Swap out one item
notes[2] = 'This note getting there'

console.log(notes.length)
console.log(notes)