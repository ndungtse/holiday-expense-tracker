import { Component, OnInit } from '@angular/core';
import { Expense, ExpenseService } from '../services/expenses.service';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrls: ['./expenses-page.component.css'],
})
export class ExpensesPageComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService
      .getExpenses()
      .subscribe((expenses: Expense[]) => (this.expenses = expenses));
  }

  addExpense(expense: Expense): void {
    this.expenseService.addExpense(expense).subscribe((expense) => {
      this.expenses.push(expense);
    });
  }
}
