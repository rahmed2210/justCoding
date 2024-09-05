//-----------------------------------------------------------------------------------------
console.log('\r\n Looping Over Arrays')
//-----------------------------------------------------------------------------------------


const notes = ['Note 1', 'Note 2', 'Note 3', 'Note4']


// console.log(notes.pop())  

// notes.push('My new Note')  

// console.log(notes.shift())

// notes.unshift('My first Note')

// console.log(notes.splice(1, 1, 'This is the new second item'))

notes[2] = 'This is now the new note 3'

//-----------------------------
console.log('\r\n') // black space
//-----------------------------
notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes + '\r\n')

notes.forEach(function (note, index) {
    const num = index + 1
    console.log(`${num}. ${note}`)
})