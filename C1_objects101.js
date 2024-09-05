console.log('\r\n Object properties  >>>>>')


let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


// read properties off of an object
console.log(myBook)
console.log(myBook.title)
console.log(myBook.author)
console.log(myBook.pageCount)
console.log(`${myBook.title} by ${myBook.author}`)


// How to Change Object properties
console.log('\r\n How to Change Object properties  >>>>>')

// Change the title of the book to a different George Orwell
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

myBook.author = 'Ahmed Family'
console.log(`${myBook.title} by ${myBook.author}`)




// Challenge Area
console.log('\r\n <<<<<<<<<<<<<<<<<<<    CHALLENGE AREA    >>>>>>>>>>>>>>>>>>>>>>')

// name, age, Location

let myInfo = {
    name: 'Rubal Ahmed',
    age: 43,
    location: 'Paterson, NJ'
}

console.log(myInfo) 
console.log(myInfo.name)
console.log(myInfo.age)
console.log(myInfo.location)
console.log(`My name is ${myInfo.name}, i'm ${myInfo.age} years old, i live in ${myInfo.location} since 1992`)


// Increase age by 1
myInfo.age = myInfo.age + 1
console.log(`My name is ${myInfo.name}, i'm ${myInfo.age} years old, i live in ${myInfo.location} since 1992`)