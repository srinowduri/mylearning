import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { EditExpenseComponent } from './expenses/edit-expense/edit-expense.component';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';

const routes: Routes = [
  { path: 'expenses', component: ExpensesComponent },
  { path: 'add', component: AddExpenseComponent },
  { path: 'edit/:id', component: EditExpenseComponent },
  { path: 'form', component: ExpensesFormComponent },
  { path: '', redirectTo: '/expenses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
