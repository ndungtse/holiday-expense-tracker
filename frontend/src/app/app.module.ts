import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpensesPageComponent } from './expenses-page/expenses-page.component';
import { SettleUpComponent } from './settle-up/settle-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesTableComponent,
    ExpenseFormComponent,
    ExpensesPageComponent,
    SettleUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
