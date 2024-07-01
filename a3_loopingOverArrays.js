const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6', 'Note 7', 'Note 8', 'Note 9', 'Note 10']


notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)


// Looping Over Arrays
// forEach --> method takes a single argument and this argument is actually a function
console.log('\r\n\---------------------------------------------------- Looping Over Arrays')// Blank Space
console.log(notes)

/*
This function is where we define what to do for each item in the array  --> 
this function itself is what's going to get executed one time for every item in the array 

index --> is the position of the item in the list and we print as well
*/
notes.forEach(function (item, index) {
      console.log(index)
      console.log(item)
})


//    -- For Loop --> trying to count in a different order or don't have array
console.log('\r\n\---------------------------------------------------- The For Loop ++')// Blank Space
//  for statement -- which is an alternative looping mechanism
   // 1st - initialize, 2nd - condition, 3rd - final expression  
for (let count = 0; count <= 5; count++ ) {
      console.log(count)
}

console.log('\r\n\---------------------------------------------------- The For Loop reverse')// Blank Space
for (let count = 5; count >= 0; count-- ) {
      console.log(count)
}

console.log('\r\n\---------------------------------------------------- ++')// Blank Space
//  for statement -- which is an alternative looping mechanism
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

console.log('\r\n\---------------------------------------------------- The For Loop reverse')// Blank Space
for (let count = notes.length - 1; count > 0; count--) {
      console.log(notes[count])
  }
