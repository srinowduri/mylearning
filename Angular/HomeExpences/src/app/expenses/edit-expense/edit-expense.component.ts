import { Component, OnInit } from '@angular/core';
import { Expense } from '../../model/expense.model';
import { Observable } from 'rxjs';
import { ExpensesService } from 'src/app/service/expenses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {
  expense$: Observable<Expense>;
  
  successMsg: string;
  errorMsg: string;
  message: string;

  constructor(private exes_service: ExpensesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(ex_data => {
      const id = ex_data['id'];
      this.expense$ = this.exes_service.getExpenseById(id);
    })
  }

  onEditExpense(expense: Expense) {
    this.exes_service.editExpence(expense).subscribe(
      ex => {
        this.successMsg = "Expense Updated successfully";
        this.router.navigate(['/expenses']);

      },
      err => {
        this.errorMsg = "Expense Updating Failed";
      }
    )
  }
}
