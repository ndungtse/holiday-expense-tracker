import { Component, Input, OnInit } from '@angular/core';
import { Expense, ExpenseService } from '../services/expenses.service';

@Component({
  selector: 'app-settle-up',
  templateUrl: './settle-up.component.html',
  styleUrls: ['./settle-up.component.css'],
})
export class SettleUpComponent implements OnInit {
  summary: any = null;
  @Input() expenses: Expense[] = [];
  warn: string = '';

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  settleUp(): void {
    if (this.expenses.length < 2) {
      this.warn = 'Please add at least two expenses';
      return;
    }
    this.expenseService.calculateExpenses().subscribe((response: any) => {
      console.log(response);
      this.summary = response.data;
    });
  }
}
