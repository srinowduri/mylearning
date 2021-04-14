import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Expense } from '../model/expense.model'; 
import { ExpensesService } from '../service/expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.scss']
})
export class ExpensesFormComponent implements OnInit {
  @Input() expenseData: Expense;

  @Output() onSubmit = new EventEmitter();

  expensesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private ex_Service: ExpensesService,
              private router: Router) { }

  ngOnInit(): void {

    this.expensesForm = this.formBuilder.group({
      id: [''],
      date: [''],
      store: [''],
      price: [''],
      comments: ['']
    });
    
    if(this.expenseData) {
       this.expensesForm.patchValue(this.expenseData);
    }
  }

  submit() {
    this.onSubmit.emit(this.expensesForm.value);
  }
    

  onCancel() {
    this.router.navigate(['/expenses']);
  }

}

