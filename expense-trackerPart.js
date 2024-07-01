
const account = {
  name: 'rubal ahmed',
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })
    
    return `${this.name} has $${totalExpenses} in expenses.`
  }
}

// expenses --> description, amount
// addExpense --> description, amount
// getAccountSummary --> total up all expenses --> has $1250 in expenses

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
console.log(account.getAccountSummary())