console.log('\r\n EXAMPLES \r\n')
// when we have an Object, we have properties  --> These are pieces of data
/*
--> Title property
--> Author property
--> Page Count property

*** property just describes a pieces of data stored on an object
*/

let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(myBook)


// What's a little more useful is figuring out how to get a single value off of an object
console.log(myBook.author)


// Use all three pieces of information inside of a template string
console.log(`${myBook.title} by ${myBook.author}`)


// Change an object's Properties
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)



//======================================================================
console.log('\r\n CHALLENGE AREA \r\n ')
// CHALLENGE AREA

// Name, age, location, Album
// Nas, 50, QueenBridge

let rapper = {
  artist: 'Nas',
  age: 50,
  location: 'QueenBridge',
  album: 'illmatic (1994)'
}

console.log(rapper)
console.log(rapper.artist)
console.log(rapper.age)
console.log(rapper.location)
console.log(rapper.album)
console.log(`${rapper.album} by ${rapper.artist}`)
console.log(`${rapper.artist} from ${rapper.location}`)

// modify album
rapper.album = 'It Was Written (1996)'
console.log(`${rapper.album} by ${rapper.artist}`)

