const notes = [{
    title: 'my next trip',
    body: 'i would like to go to spain'
  }, {
    title: 'habbits to work on',
    body: 'exercise. eating a bit better'
  }, {
    title: 'office modification',
    body: 'get a new seat'
  }]
  
  const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
      return note.title === noteTitle
    })// case sensitive ^^            
    return notes[index]
  }
  
  const note = findNote(notes, 'office modification')
  console.log(note)
  
  
  // console.log('----------------------------')
  // const index = notes.findIndex(function (note, index) {
  //   console.log(note)
  //   return note.title === 'habbits to work on'
  // })
  // console.log(index)
  
  // findIndex --> do is return either true or false
  
  
   console.log('----------------------------')
  // modify what qualifies as a match  --> convert both to all uppercase or all lowercase taking the case sensitive out of the equation altogether
  
  const findNote1 = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
      return note.title.toLowerCase() === noteTitle.toLowerCase()
    })// case sensitive ^^            
    return notes[index]
  }
  
  const note1 = findNote1(notes, 'office modification')
  console.log(note)
  
  
   console.log('----------------------------')
   
  const findNote3 = function (notes, noteTitle) {
    return notes.find(function (note3, index) {
      return note3.title.toLowerCase() === noteTitle.toLowerCase()
    })// case sensitive ^^            
    r
  }
  
  const note3 = findNote1(notes, 'office modification')
  console.log(note3)
  
  /* array are also passed by reference, which means that if i pass an array into a function
  and i make a change to that array, i'm going to see it reflected in the original one
  */