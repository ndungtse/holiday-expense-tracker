import { Component } from '@angular/core';
import { ExpenseService, Expense } from '../services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent {
  name: string;
  expense: number | null;

  constructor(private expenseService: ExpenseService) {
    this.name = '';
    this.expense = null;
  }

  addExpense() {
    const newExpense: Expense = { name: this.name, expense: this.expense };
    this.expenseService.addExpense(newExpense);
    this.name = '';
    this.expense = null;
  }
}
