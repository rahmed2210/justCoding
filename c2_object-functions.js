console.log('\r\n EXAMPLES \r\n')


let bookOne = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let bookTwo = {
  title: 'A People History',
  author: 'Howard Zinn',
  pageCount: 723
}


/* 
    console.log for every book in my collection, 
    this going to create code that's duplicated over and over again.
    instead of duplicating the code and writing a bunch of console dot log statement
*/

/* 
     Create a function that accepts a book than going to be able to use the book's
    properties to generate that message
*/

console.log('\r\n <== Create a function ==>')
let getSummaryFuncation = function (book) {
  console.log(`${book.title} by ${book.author}`)
}

getSummaryFuncation(bookOne)
getSummaryFuncation(bookTwo)



// return Object from function
console.log('\r\n <==  Return Object  ==>')

let getSummaryReturn = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
  
}

let bookSummaryOne = getSummaryReturn(bookOne)
let bookSummaryTwo = getSummaryReturn(bookTwo)

console.log(bookSummaryOne.pageCountSummary)




//=========================================================

//============= CHALLENGE AREA ============================
console.log('\r\n <==  CHALLENGE AREA  ==> \r\n')

// Create a function that return an object

// pass in Fahrenheit and convert to both Celsius and Kelvin 
// returning an object that contains all three temperatures

/*
let fahrenheit = 50 
let celsius = (fahrenheit - 32) * 5 / 9
let kelvin = (fahrenheit + 459.67) * 5 / 9
*/

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9)
  }
}

let temps = convertFahrenheit(74)
console.log(temps)

