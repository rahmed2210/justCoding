// Lexical Scope (Static Scope)
// Global Scope - defined outside of all code blocks
// Local Scope - defined inside a code block


// isn a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope - (varOne)
  // Local Scope - (varTwo)
    // Local Scope - (varFour)
  // Local Scope - (varThree)


  /*
   Global Scope - (varOne)
   |
   |__Local Scope - (varTwo)
      |
      |__Local Scope - (varFour)
   |
   |__Local Scope - (varThree)
    

 
*/


let varOne = 'varOne'  //--> Global scope

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo' //--> Local scope
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree' //--> Local scope
}

console.log(varTwo)


