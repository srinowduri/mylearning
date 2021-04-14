import { Component, OnInit } from '@angular/core';
import { Expense } from '../model/expense.model';
// import { expenses } from '../data/expense.data';
import { ExpensesService } from '../service/expenses.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses: Observable<Expense[]>;
  
  constructor(private exes_service: ExpensesService,
              private router: Router) { }

  ngOnInit(): void {
    this.expenses = this.getExpenses();
  }

  getExpenses() {
    return this.exes_service.getExpenses();
  }

  gotoAddExpense() {
    this.router.navigate(['/add']);
  }

  gotoEditExpense(id: string) {
    this.router.navigate(['/edit/' + id]);
  }

  onDeleteExpense(id: string) {

    this.exes_service.deleteExpense(id).subscribe(res => {
        this.expenses = this.getExpenses();
    })
  }
}



