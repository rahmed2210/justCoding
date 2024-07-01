let isAccountLocked = true


if (isAccountLocked) {
  console.log('TRUE: --> ' + 'Is Account Locked')
} else {
  console.log('TRUE: --> ' + 'Welcome')
}


let isAccountLocked1 = false

if (isAccountLocked1) {
  console.log('FALSE: --> ' + 'Is Account Locked')
} else {
  console.log('FALSE: --> ' + 'Welcome')
}  



// --------------IF \ ELSE IF  \ ELSE-----------------------------

let isAccountLocked2 = false
let userRole = 'user'

if (isAccountLocked2) {
  console.log('isAccountLocked2')
} else if (userRole === 'admin') {
  console.log('Welcome Admin')
} else {
  console.log('Welcome')
}



// --------------CHALLENGE AREA ELSE--------------------------

let Temp = 45

// It is freezing outside!
// It is hot outside
// Go for it, It is pretty nice

if (Temp <= 35) {
  console.log('It is freezing Outside')
} else if (exTemp >= 110) {
  console.log('its hot Outside')
} else {
  console.log('Go for it, It is pretty nice')
}




// ---------------------------- NOTES --------------------------------------
//--------------------------------------------------------------------------

let exIsAccountLocked = false
let exUserRole = 'user'

if (exIsAccountLocked) {
    console.log('Is account locked')
} else if (exUserRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}



// ---------------------------- CHALLENGE AREA --------------------------------------
//-----------------------------------------------------------------------------------

let exTemp = 4

if (exTemp <= 32) {
    console.log('It is freezing outside')
} else if (exTemp >= 110) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is pretty nice out')
}