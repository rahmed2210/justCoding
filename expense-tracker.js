//expense-trackerPart2.js

// --> Part 1
// expenses --> description, amount
// addExpense --> description, amount
// getAccountSummary --> total up all expenses --> has $1250 in expenses

const account = {
  name: 'rubal ahmed',
  expenses: [],
  income: [], 
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0 
    let accountBalance = 0 
    
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })
    
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })
    
    accountBalance = totalIncome - totalExpenses
    
    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`
  }
}


// --> Part 2
// 1. add income array to account
// 2. addIncome method -->description, amount
// 3. tweak getAccountSummary

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())