//-----------------------------------------------------------------------------------------
console.log('\r\n The For Loop')
//-----------------------------------------------------------------------------------------


const notes = ['Note 1', 'Note 2', 'Note 3', 'Note4']


// console.log(notes.pop())  

// notes.push('My new Note')  

// console.log(notes.shift())

// notes.unshift('My first Note')

// console.log(notes.splice(1, 1, 'This is the new second item'))

notes[2] = 'This is now the new note 3'

//----------------------------------------------------------------
console.log('\r\n') // blank space
//----------------------------------------------------------------
notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes + '\r\n')


//----------------------------------------------------------------
console.log('\r\n') // blank space
//----------------------------------------------------------------
console.log(`You have ${notes.length} Notes!`)
notes.forEach(function (note, index) {
    const num = index + 1
    console.log(`${num}. ${note}`)
})

//----------------------------------------------------------------
console.log('\r\n') // blank space
//----------------------------------------------------------------
// counting ... 1 2 3
/* 
The first is an initializer, the second is a condition, and the third is the final expressing

for (initializer, condition, expression) {
}
*/


for (let count = 0; count <= 2; count++) {
    console.log(count)
}

console.log('\r\n count in normal order :-->')
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

console.log('\r\n count in Revers :-->')
for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}