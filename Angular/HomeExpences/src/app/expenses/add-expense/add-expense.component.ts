import { Component, OnInit } from '@angular/core';
import { Expense } from '../../model/expense.model';
import { Observable } from 'rxjs';
import { ExpensesService } from 'src/app/service/expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  
  expenses: Observable<Expense[]>;
  
  toggleForm: boolean = false;
  buttonTitle: String = "New Expence";
  successMsg: string;
  errorMsg: string;
  message: string;

  constructor(private exes_Service: ExpensesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  getexpenses() {
    return this.exes_Service.getExpenses();
  }

  onNewExpense(expense: Expense) {
    this.exes_Service.addNewExpence(expense).subscribe(
      ex => {
        this.successMsg = "New Expense have added";
        console.log(this.successMsg);
        this.router.navigate(['/expenses']);
      },
      err => {
        this.errorMsg = "Something went wrong";
        console.log(this.errorMsg);
      }
    )
  
  }
}
