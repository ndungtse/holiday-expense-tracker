export class ExpenseService {
  static calculateExpenses(expenses: any[]) {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.expense, 0);
    const averageExpense = totalExpenses / expenses.length;
    const expensesOwed = expenses.map((expense) => ({
      name: expense.name,
      amountOwed: expense.expense - averageExpense,
    }));
    const expensesOwing = expensesOwed.filter((expense) => expense.amountOwed < 0);
    const expensesOwedTo = expensesOwed.filter((expense) => expense.amountOwed > 0);
    const payments = expensesOwing.map((expenseOwing) => {
      const expenseOwedTo = expensesOwedTo.find((expenseOwed) => expenseOwed.amountOwed === -expenseOwing.amountOwed);
      return {
        from: expenseOwing.name,
        to: expenseOwedTo?.name,
        amount: expenseOwedTo?.amountOwed,
      };
    });
    return {
      totalExpenses,
      averageExpense,
      expensesOwed,
      expensesOwing,
      expensesOwedTo,
      payments,
    };
  }
}
