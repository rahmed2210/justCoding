const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */


console.log(' -------------- Filtering Arrays --------------')
/*-->  static boolean
const filteredNotes = notes.filter(function (note, index) {
  return true
})
console.log(filteredNotes)
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
const filteredNotes = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLowerCase().includes('office')
  const isBodyMatch = note.body.toLowerCase().includes('office')
  return isTitleMatch || isBodyMatch
})
*/

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(' ---------------------------')
console.log(findNotes(notes, 'work'))
console.log(' ---------------------------')
console.log(findNotes(notes, 'eating'))

//------------------------------------------------------------------

console.log(' ---------------------------')
const note = findNote(notes, 'some other office modification')
console.log(note)
