console.log('\r\n EXAMPLES 1 \r\n')

let myAccount = {
  name: 'Rubal Ahmed',
  expenses: 0,
  income: 0
}
let otherAccount = myAccount
otherAccount.income = 1000

// create a function that allows us to add an expense
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
  
}

addExpense(myAccount, 2.50)
console.log(myAccount)
addExpense(myAccount, 3.50)
console.log(myAccount)
addExpense(myAccount, 4.50)
console.log(myAccount)
