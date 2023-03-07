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
    this.expenses = this.expenseService.getExpenses();
  }

  // addExpense() {
  //   const newExpense: Expense = { name: this.name, expense: this.expense };
  //   this.expenseService.addExpense(newExpense);
  //   this.name = '';
  //   this.expense = null;
  // }
}
