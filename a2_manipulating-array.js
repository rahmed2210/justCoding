const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6', 'Note 7', 'Note 8', 'Note 9', 'Note 10']

/* How to manipulate arrays
      - Add new item
      - remove item
      -replace existing item
** running through a series of methods on the array
*/

// Push Method  --> add something on to the end
console.log('\r\n\---------------------------------------------------- Push Method')// Blank Space
notes.push('My new Note')
console.log(notes)


// Pop Method --> remove something from the end
//notes.pop()
console.log('\r\n\---------------------------------------------------- Pop Method')// Blank Space
console.log(notes.pop())
console.log(notes)


/* 
 Two method manipulating the array from the start --> Shift & --> Unshift

 Shift Method --> removes the very first item from array
*/
console.log('\r\n\---------------------------------------------------- Shift Method')// Blank Space
console.log(notes.shift())
console.log(notes)


// Unshift Method --> add items on to the beginning of the array
console.log('\r\n\---------------------------------------------------- Unshift Method')// Blank Space
notes.unshift('Note 1','My First Notes')
console.log(notes)


// Splice Method --> allow us to add elements to the middle of an array or remove elements from anywhere
//   -- 1st argument to splice is where you're trying to take the action, you need to provide the index
console.log('\r\n\---------------------------------------------------- Splice Method')// Blank Space
console.log(notes.splice(1, 1))
console.log(notes.length)
console.log(notes)


// Add second item in array
console.log('\r\n\---------------------------------------------------- Splice Method Add second item')// Blank Space
console.log(notes)
notes.splice(1, 1, 'This is the new Second Note')
console.log(notes.length)
console.log(notes)


// Combine both of them to replace an item
console.log('\r\n\---------------------------------------------------- Splice Method combine both')// Blank Space
console.log(notes)
notes.splice(4, 1, 'This is the new Third Note')
console.log(notes.length)
console.log(notes)


// Change the value of a given item using bracket notation
console.log('\r\n\---------------------------------------------------- Change The Value')// Blank Space
console.log(notes)
notes[1] = 'This is the New Note 1'
console.log(notes)