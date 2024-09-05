
// Global Scope - (name)
  // Local Scope - (name)
    // Local Scope - (varFour)
  // Local Scope - (varThree)

  /*
   Global Scope - 
   |
   |__Local Scope - 
      |
      |__Local Scope - 
   |
   |__Local Scope - 
    

 
*/





let name = 'Rubal'

if (true) {
  let name = 'Mike'
  if (true) {
    name = 'Jen'
    console.log(name)
  }
}


if (true) {
  console.log(name)

}



