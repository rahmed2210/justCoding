//       ---- condition operator  ----


let accessAllowed;
let year = prompt('in which year was football world cup held')
if (year == 2000) {
    accessAllowed = true;
} else (year == 2004) {
    accessAllowed = false;
}

// alert(accessAllowed)

/*     syntax
   let result = condition ? value1 : value2


let accessAllowed = (year == 2000) ? true : false;

alert(accessAllowed)

*/


//----------------------------------------------------------------


let age2 = prompt('age2?', 18);

let message = (age2<3) ? 'Hi' :
    (age2<18) ? 'hello':
    (age2<100) ? 'Gretting' :
    'What an unusual age';

alert(message)



// example with If conditions

let age = prompt('age?', 18);

if (age<3) {
    message = 'Hi'
} else if (age<18) {
    message = 'hello'
} else if (age<55) {
    message ='greeting'
} else {
    message = 'What an unusual age'
}

alert(message)