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
  
 
  console.log(notes.length)
  console.log(notes)
  
  
  //  ---<> Searching Arrays Part 1  <>---
  
  // ---> indexOf -- to find if a note exists or maybe locate to replace or delete it
  console.log()
  
  /*  
  when comparing two objects, it does not matter if they have the same
  set of objects properties and the same object property values that does
  not make two object equal  
  */
  
  // what make two object equal is if they're the exact same object in memory
  
  // let somObject ={}
  // let otherObject = somObject
  // console.log(somObject === otherObject)
  
  // alternative way to get the index of something in array, knowing that something is an object
  
  
  // --> findIndex
  console.log('----------------------------')
  notes.findIndex(function (note, index) {
    console.log(note)
  })
  
  console.log('----------------------------')
  const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'habbits to work on'
  })
  console.log(index)
  
  // findIndex --> do is return either true or false
  