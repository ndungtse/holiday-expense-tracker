import { Component, Input, OnInit } from '@angular/core';
import { Expense, ExpenseService } from '../services/expenses.service';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css'],
})
export class ExpensesTableComponent implements OnInit {
  // expenses: Expense[] = [];
  @Input() expenses: Expense[] = [];
  calculatedExpenses: any;
  showCalculatedExpenses = false;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  addExpense(name: string, expense: number) {
    this.expenses.push({ name, expense });
  }

  // calculateExpenses() {
  //   this.calculatedExpenses = this.expenseService.calculateExpenses(
  //     this.expenses
  //   );
  //   this.showCalculatedExpenses = true;
  // }
}
