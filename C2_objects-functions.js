let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let myBook2 = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723
}

let myBook3 = {
    title: 'Animal Farm',
    author: 'George Orwell',
    pageCount: 92
}

let myBook4 = {
    title: 'Coming Up for Air',
    author: 'George Orwell',
    pageCount: 256
}

let myBook5 = {
    title: 'The Road to Wigan Pier',
    author: 'George Orwell',
    pageCount: 110
}


// How to pass an objects into functions
let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(myBook2)
getSummary(myBook3)
getSummary(myBook4)
getSummary(myBook5)



// How to return an object from a functions
console.log('\r\n How to return an object from a functions ===>')

let getSummary1 = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary1(myBook)
let bookSummary2 = getSummary1(myBook2)
let bookSummary3 = getSummary1(myBook3)
let bookSummary4 = getSummary1(myBook4)
let bookSummary5 = getSummary1(myBook5)


console.log(bookSummary.pageCountSummary)
console.log(bookSummary2.pageCountSummary)
console.log(bookSummary3.pageCountSummary)
console.log(bookSummary4.pageCountSummary)
console.log(bookSummary5.pageCountSummary)




// Challenge Area
console.log('\r\n <<<<<<<<<<<<<<<<<<<    CHALLENGE AREA    >>>>>>>>>>>>>>>>>>>>>>')

// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)