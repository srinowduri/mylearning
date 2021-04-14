import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { EditExpenseComponent } from './expenses/edit-expense/edit-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpensesFormComponent,
    AddExpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
