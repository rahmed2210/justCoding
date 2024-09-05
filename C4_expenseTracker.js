let myAccount = {
    name: 'Rubal Ahmed',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    
}


// add Income
let AddIncome = function (account, income) {
    account.income = account.income + income
}


// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}


// getAccountSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
//  // Account for andrew has $900. $1000 in income. $100 in express  
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expense` 
}

AddIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// AddIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary