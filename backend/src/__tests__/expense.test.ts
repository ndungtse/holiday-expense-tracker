import { ExpenseService } from '../service/expense.service';

describe('ExpenseService', () => {
  describe('calculateExpenses', () => {
    it('should calculate expenses correctly', () => {
      const expenses = [
        { name: 'John', expense: 50 },
        { name: 'Jane', expense: 25 },
        { name: 'Bob', expense: 75 },
        { name: 'Alice', expense: 100 },
      ];

      const result = ExpenseService.calculateExpenses(expenses);

      expect(result.totalExpenses).toBe(250);
      expect(result.averageExpense).toBe(62.5);
      expect(result.expensesOwed).toEqual([
        { name: 'John', amountOwed: -12.5 },
        { name: 'Jane', amountOwed: -37.5 },
        { name: 'Bob', amountOwed: 12.5 },
        { name: 'Alice', amountOwed: 37.5 },
      ]);
      expect(result.expensesOwing).toEqual([
        { name: 'John', amountOwed: -12.5 },
        { name: 'Jane', amountOwed: -37.5 },
      ]);
      expect(result.expensesOwedTo).toEqual([
        { name: 'Bob', amountOwed: 12.5 },
        { name: 'Alice', amountOwed: 37.5 },
      ]);
      expect(result.payments).toEqual([
        { from: 'John', to: 'Bob', amount: 12.5 },
        { from: 'Jane', to: 'Alice', amount: 37.5 },
      ]);
    });
  });
});
