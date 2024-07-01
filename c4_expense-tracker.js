console.log('\r\n EXAMPLES 1 \r\n')

let myAccount = {
  name: 'Rubal Ahmed',
  expenses: 0,
  income: 0
}


// create a function that allows us to add an expense
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

// adding Income
let addIncome = function (account, income) {
  account.income = account.income + income
}

// resting Account
let restAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// get Account Summary
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}.  $${account.income} in income.  $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 150)
console.log(getAccountSummary(myAccount))
restAccount(myAccount)
console.log(getAccountSummary(myAccount))

// addIncome
// addExpense
// addExpense
// getAccountSummary
// restAccount
// getAccountSummary