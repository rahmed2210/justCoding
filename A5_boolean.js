let temp = 31

// Equality Operator:  ===
let isFreezing = temp === 31
console.log('Equality Operator:-->  ' + isFreezing)


// Not Equal Operator:  !==
let isFreezing1 = temp !== 32
console.log('Not Equal:-->  ' + isFreezing1)


// Less Than Operator:  <
let isFreezing2 = temp < 32
console.log('Less Than:-->  ' + isFreezing2)


// Greater Than Operator:  >
let isFreezing3 = temp > 32
console.log('Greater Than:-->  ' + isFreezing3)


// Greater Than OR Equal to Operator:  >=
let isFreezing4 = temp >= 32
console.log('Greater Than OR Equal to:-->  ' + isFreezing4)


// Less Than Equal to Operator:  >=
let isFreezing5 = temp <= 32
console.log('Less Than OR Equal to:-->  ' + isFreezing5)


//  ----------------------- CHALLENGE AREA --------------------------
//  -----------------------------------------------------------------

// create age set to your age
// calculate is child = if they are 7 or under
// calculate is senior - if they are 65 or older
// print is child value
// print is senior value


let age = 42
let isChild = age <= 7
let isSenior = age >= 65


console.log('isChild:-->  ' + isChild)
console.log('isSenior:-->  ' + isSenior)


// > - greater than Operator
// <= - less than or equal to operator
// >= - greater than or equal to Operator


let exTemp = 180

if (exTemp  <= 32) {
    console.log('It is freezing outside!')
}

if (exTemp  >= 110) {
    console.log('It is way to hot outside!')
}


// Challenge area

let chAge = 6

// If 7 or under print message about child pricing
if (chAge <= 7) {
    console.log('You will get a child discount!')
}

// If 65 or older print message about senior discount
if (chAge >= 65) {
    console.log('You will get a senior discount!')
}