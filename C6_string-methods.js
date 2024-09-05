// https://developer.mozilla.org/en-US/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript




let name = 'Rubal Ahmed'
let kName = 'Shayaan Ahmed'

// Length property
console.log(name.length)
console.log(kName.length)

// Methods --> Convert to Upper case
console.log(name.toUpperCase())
console.log(kName.toUpperCase())

// Methods --> Convert to Lower case
console.log(name.toLowerCase())
console.log(kName.toLowerCase())

// Include method
let password = 'abc123password'
console.log(password.includes('password'))
//--> will return true if it contains it, false if it doesn't

// trim
let trimName = ' Rubal Ahmed '
console.log(trimName)
console.log(trimName.trim())


// Challenge Area
console.log('  =========  CHALLENGE AREA  =========  ')


// invalidPassword
// length is more than 8  - and  it doesn't contain the word password
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}
/*   OR
let isValidPassword = function (password) {
  if (password.length > 8 && !password.includes("password")) {
    return true;
  } else {
    return false;
  }
} */



console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc1123@#$%&*'))
console.log(isValidPassword('asdfghjklpoipassword'))